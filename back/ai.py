import os
from dotenv import load_dotenv
import openai
from openai import OpenAI
# .env 파일 로드
load_dotenv()

# 환경 변수에서 API 키 가져오기
openai.api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI()

def ask_openai(question, chat_log=None):
    if chat_log is None:
        chat_log = []
    messages = [{"role": "user", "content": msg} for msg in chat_log]
    messages.append({"role": "user", "content": question})
    # new openai 반영.
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    # new openai 반영.
    answer = response.choices[0].message.content
    return answer

def chat():
    print("chatting is started. If you want to exit, enter 'exit'.")
    chat_log = []
    while True:
        user_input = input("User: ")
        if user_input.lower() == 'exit':
            print("Exiting...")
            break
        response = ask_openai(user_input, chat_log)
        print(f"AI bot: {response}")
        chat_log.extend([user_input, response])

if __name__ == "__main__":
    chat()