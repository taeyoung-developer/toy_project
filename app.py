
from flask import Flask, render_template, jsonify, request, make_response
import requests
app = Flask(__name__)



# HTML 화면 보여주기
@app.route('/')
def home():
    return render_template('index.html')

# @app.route('/main')
# def main():
#     return render_template('index.html')
@app.route('/transfer',methods=['POST'])
def style_transfer():
    content = request.form['content']
    style = request.form['style']
    print(content, style)
    r = requests.post(
        "https://api.deepai.org/api/fast-style-transfer",
        files={
            'content': open(content, 'rb'),
            'style': open(style, 'rb'),
        },
        headers={'api-key': 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'}
    )
    change_style = r.json()


    print(change_style)
    return change_style


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)