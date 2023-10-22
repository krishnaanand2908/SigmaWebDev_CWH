from flask import Flask

#! IDK HOW THE CODE WORKS I JUST COPIED THE CODE FROM BARD

app = Flask(__name__)

@app.route("/")
def hello_world():
  return "<h1>Hello, World!</h1>\n<a href=\"https://www.google.com\" target = \"_blank\">Google</a>"

if __name__ == "__main__":
  app.run(debug=True)