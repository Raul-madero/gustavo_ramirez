from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import pymysql
from dotenv import load_dotenv
import os
load_dotenv

# host = os.getenv("DB_HOST")
# user = os.getenv("DB_USERNAME")
# psswd = os.getenv("DB_PASSWORD")
# port = os.getenv("DB_PORT")
# database = os.getenv("DB_NAME")

# pymysql.install_as_MySQLdb()



app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)