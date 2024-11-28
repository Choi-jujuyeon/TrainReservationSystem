from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from flask_cors import CORS  # CORS 임포트
import pymysql

app = Flask(__name__)
CORS(app)  # CORS 초기화
bcrypt = Bcrypt(app)

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
                return jsonify({"아이디나 패스워드가 일치하지 않습니다."}), 400

            # 비밀번호 검증
            if bcrypt.check_password_hash(user['member_pwd'], password):
                return jsonify({"message": "Login successful!"}), 200
            else:
                return jsonify({"아이디나 패스워드가 일치하지 않습니다."}), 400
    except pymysql.MySQLError as e:
        return jsonify({"error": str(e)}), 500
    finally:
        connection.close()

if __name__ == "__main__":
    app.run(debug=True)
