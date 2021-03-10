from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<name>')
def hi_name(name):
    return 'Hi ' + name + '!'

@app.route('/repeat/<int:num>/<word>')
def repeat_stuff(num,word):
    return word * int(num)

@app.errorhandler(404)
def not_right_page(self):
    return 'Sorry! No response. Try again.'

if __name__=="__main__":
    app.run(debug=True)
