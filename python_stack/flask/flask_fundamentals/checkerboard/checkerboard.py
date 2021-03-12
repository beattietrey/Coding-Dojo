from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def checkerboard():
    return render_template('index.html')

@app.route('/<int:rows>')
def custom_rows(rows,col=8):
    return render_template("index.html", rows=rows, col=col)

@app.route('/<int:rows>/<int:col>')
def custom_board(rows,col,color1='black',color2='red'):
    return render_template("index.html", rows=rows, col=col, color1=color1, color2=color2)

@app.route('/<int:rows>/<int:col>/<color1>/<color2>')
def custom_color_board(rows, col,color1,color2):
        return render_template("index.html", rows=rows, col=col, color1=color1, color2=color2)












if __name__=="__main__":
    app.run(debug=True)