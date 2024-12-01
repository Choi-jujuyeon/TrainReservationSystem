from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

load_dotenv()
openai.api_key = os.getenv('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')

@app.route('/aipage', methods=['POST'])
def check_seat_status():
    try:
        data = request.json
        print(f"Received request data: {data}")
        seat_number = data.get("seatNumber")
        if not seat_number:
            return jsonify({"error": "Seat number is missing"}), 400

        print(f"Received seat number: {seat_number}")
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=f"Check if seat {seat_number} is available.",
            max_tokens=50
        )
        
        result_text = response.choices[0].text.strip()
        print(f"GPT response: {result_text}")
        return jsonify({"message": result_text})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

