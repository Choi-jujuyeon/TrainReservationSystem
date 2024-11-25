from flask import Blueprint, request, jsonify
from app import get_db_connection

member_bp = Blueprint('member', __name__)

# 회원가입 API
@member_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    member_id = data['member_id']
    member_pwd = data['member_pwd']

    connection = get_db_connection()
    with connection.cursor() as cursor:
        query = "INSERT INTO member (member_id, member_pwd) VALUES (%s, %s)"
        try:
            cursor.execute(query, (member_id, member_pwd))
            connection.commit()
            return jsonify({"message": "회원가입 성공"}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 400
        finally:
            connection.close()
