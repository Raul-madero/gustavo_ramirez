from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import pymysql

pymysql.install_as_MySQLdb()

app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:2603@localhost:3306/gustavoramirez"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)