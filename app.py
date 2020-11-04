
from flask import Flask, render_template, jsonify, request, make_response

app = Flask(__name__)



# HTML 화면 보여주기
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ImgUpload',methods=['GET','POST'])
def ImgUpload():
    if request.method =='POST':
        content = request.form['content']
        style = request.form['style']
        return render_template('index.html')


@app.route('/main')
def main():
    return render_template('index2.html')



if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)