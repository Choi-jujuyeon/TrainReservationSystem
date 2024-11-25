from flask import Flask
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)  # 리액트와 연동 시 CORS 문제 해결

# MySQL 데이터베이스 설정
app.config['DB_HOST'] = 'localhost'
app.config['DB_USER'] = 'root'
app.config['DB_PASSWORD'] = 'yourpassword'
app.config['DB_NAME'] = 'train_reservation'

# 데이터베이스 연결 함수
def get_db_connection():
    return pymysql.connect(
        host=app.config['DB_HOST'],
        user=app.config['DB_USER'],
        password=app.config['DB_PASSWORD'],
        database=app.config['DB_NAME'],
        cursorclass=pymysql.cursors.DictCursor
    )

# 라우트 등록
from routes.member_routes import member_bp
from routes.reservation_routes import reservation_bp

app.register_blueprint(member_bp, url_prefix='/api/member')
app.register_blueprint(reservation_bp, url_prefix='/api/reservation')

if __name__ == "__main__":
    app.run(debug=True)
