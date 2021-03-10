from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def wrong_site():
    return "This isn't the playground?"

@app.route('/play')
def playground():
    return render_template('index.html',times=3,color=color)

@app.route('/play/<int:x>')
def playground_int(x):
    return render_template('index.html',times=x,color=color)

@app.route('/play/<int:x>/<color>')
def playground_int_color(x, color):
    return render_template('index.html',times=x,color=color)



if __name__=="__main__":
    app.run(debug=True)