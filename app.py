from flask import Flask, render_template, jsonify, request, make_response
import requests
import json

app = Flask(__name__)

with open('config.json', 'r') as f:
    config = json.load(f)


# HTML 화면 보여주기
@app.route('/')
def home():
    return render_template('index.html')


# @app.route('/main')
# def main():
#     return render_template('index2.html')

# 변경할 url 가져와 openapi로 보내고 json 형태로 data 받기
@app.route('/transfer', methods=['POST'])
def style_transfer():

    # print(config['default']['secret-key'])
    content = request.form['content']
    style = request.form['style']

    r = requests.post(
        "https://api.deepai.org/api/fast-style-transfer",
        files={
            'content': content,
            'style': style,
        },
        headers={'api-key': config['default']['secret-key']}
    )
    change_style = r.json()

    print(change_style)
    return change_style


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
