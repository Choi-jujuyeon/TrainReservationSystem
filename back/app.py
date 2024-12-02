from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from flask_cors import CORS
import pymysql
import openai
import os
from openai import OpenAI
from dotenv import load_dotenv
import json

app = Flask(__name__)
CORS(app)  # CORS 초기화
bcrypt = Bcrypt(app)

load_dotenv()

# 환경 변수에서 API 키 가져오기
openai.api_key = os.getenv("OPENAI_API_KEY")
# MySQL 데이터베이스 연결 정보
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "0417",  # MySQL 비밀번호
    "database": "trainreserve_db",  # 스키마 이름
    "cursorclass": pymysql.cursors.DictCursor
}

# 회원가입 API
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    member_name = data.get('username')
    member_email = data.get('email')  # 필요하다면 email도 추가
    member_id = data.get('id')
    password = data.get('password')

    if not member_name or not member_id or not password:
        return jsonify({"error": "Missing required fields"}), 400

    # 비밀번호 해싱
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    try:
        connection = pymysql.connect(**db_config)
        with connection.cursor() as cursor:
            # MySQL INSERT 쿼리 실행
            sql = """
            INSERT INTO member (member_id, member_name, member_pwd)
            VALUES (%s, %s, %s)
            """
            cursor.execute(sql, (member_id, member_name, hashed_password))
        connection.commit()
    except pymysql.MySQLError as e:
        return jsonify({"error": str(e)}), 500
    finally:
        connection.close()

    return jsonify({"message": "User registered successfully!"}), 201

# 로그인 API
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    member_id = data.get('id')
    password = data.get('password')
    
    if not member_id or not password:
        return jsonify({"error": "Missing required fields"}), 400

    try:
        connection = pymysql.connect(**db_config)
        with connection.cursor() as cursor:
            # 아이디에 해당하는 사용자가 존재하는지 확인
            sql = "SELECT member_pwd FROM member WHERE member_id = %s"
            cursor.execute(sql, (member_id,))
            user = cursor.fetchone()

            if user is None:
                return jsonify({"error": "아이디나 패스워드가 일치하지 않습니다."}), 400

            # 비밀번호 검증
            if bcrypt.check_password_hash(user['member_pwd'], password):
                return jsonify({"message": "Login successful!"}), 200
            else:
                return jsonify({"error": "아이디나 패스워드가 일치하지 않습니다."}), 400
    except pymysql.MySQLError as e:
        return jsonify({"error": str(e)}), 500
    finally:
        connection.close()

# 예약 API
@app.route('/main', methods=['POST'])
def reserve():
    data = request.json

    member_id = data.get('memberId')
    selected_year = data.get('year')
    selected_month = data.get('month')
    selected_day = data.get('day')
    selected_time = data.get('time')
    selected_people_count = data.get('peopleCount')

    # 입력값 검증
    if not all([member_id, selected_year, selected_month, selected_day, selected_time, selected_people_count]):
        return jsonify({"error": "Missing required fields"}), 400

    try:
        connection = pymysql.connect(**db_config)
        with connection.cursor() as cursor:
            # 예약 정보 저장
            sql = """
            INSERT INTO reservation (depart_year, depart_month, depart_day, depart_time, member_id, people_count)
            VALUES (%s, %s, %s, %s, %s, %s)
            """
            cursor.execute(sql, (selected_year, selected_month, selected_day, selected_time, member_id, selected_people_count))
        connection.commit()

    except pymysql.MySQLError as e:
        return jsonify({"error": str(e)}), 500
    finally:
        connection.close()

    return jsonify({"message": "Reservation successful!"}), 201


def execute_function(data,id):
    if data.function.name =="get_date":
        data=json.loads(data.function.arguments)
        selected_year = data['year']
        selected_month = data['month']
        selected_day = data['day']
        selected_time = data['time']
        selected_people_count = data['count']
        # 입력값 검증
        member_id = id
        if not all([member_id, selected_year, selected_month, selected_day, selected_time, selected_people_count]):
            return jsonify({"error": "Missing required fields"}), 400

        try:
            connection = pymysql.connect(**db_config)
            with connection.cursor() as cursor:
                # 예약 정보 저장
                sql = """
                INSERT INTO reservation (depart_year, depart_month, depart_day, depart_time, member_id, people_count)
                VALUES (%s, %s, %s, %s, %s, %s)
                """
                cursor.execute(sql, (selected_year, selected_month, selected_day, selected_time, member_id, selected_people_count))
            connection.commit()

        except pymysql.MySQLError as e:
            return jsonify({"error": str(e)}), 500
        finally:
            connection.close()

        return jsonify({"message": "Reservation successful!"}), 201
    else:
        return jsonify({"message": "Reservation successful!"}), 200

conversation_history = [{"role": "user", "content": "너는 기차 예매를 도와주는 ai챗봇이야."}]
k=0
@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get("prompt")
    member_id = request.json.get("memberId")
    
    conversation_history.append({"role": "user", "content": user_input},)
    print(conversation_history)
    client = OpenAI()
    tools=[{
        "type":"function",
        "function": {
        "name": "get_date",
        "description": "사용자가 원하는 출발 날짜(년월일시간)와 탑승인수 구하기",
        "parameters": {
            "type": "object",
            "properties": {
                "year": {
                    "type": "string",
                    "description": "기차 출발년도."
                },
                "month": {
                    "type": "string",
                    "description": "기차 출발월."
                },
                "day": {
                    "type": "string",
                    "description": "기차 출발일."
                },
                "time": {
                    "type": "string",
                    "description": "기차 출발시간(3시 31분이면 반올림해서 4)."
                },
                "count": {
                    "type": "string",
                    "description": "사람 몇명 타는지"
                },
            },
            "required": ["year","month","day","time","count"],
        },
    },
    }
    ]
    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=conversation_history,
    tools=tools,
    tool_choice="auto"
    )
   
    print(response.choices[0].message)
    if (
    response.choices
    and len(response.choices) > 0
    and response.choices[0].message
    and response.choices[0].message.tool_calls
    and len(response.choices[0].message.tool_calls) > 0
):
        
        execute_function(response.choices[0].message.tool_calls[0],member_id)
        global k
        if k==0:
            response.choices[0].message.content="2024년 12월 15일 오전 6시 서울에서 부산가는 열차를 찾았어요.이거로 예매해 드릴까요?"
            k+=1
        else :
            response.choices[0].message.content="좌석확인 도와드릴게요!"
            ai_reply = response.choices[0].message.content
            return jsonify({"reply": ai_reply})
    ai_reply = response.choices[0].message.content
    
    conversation_history.append({"role": "assistant", "content":ai_reply})

    return jsonify({"reply": ai_reply})

if __name__ == "__main__":
    app.run(debug=True)
