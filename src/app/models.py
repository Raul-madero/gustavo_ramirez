from sqlalchemy import Column, String, Integer, BOOLEAN
from sqlalchemy.orm import declarative_base
import pymysql
pymysql.install_as_MySQLdb()
from app.app import db

Base = declarative_base()

class Colaboradores(db.Model):
    __tablename__ = 'colaboradores'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(45), nullable=False)
    apellido = db.Column(db.String(45), nullable=False)

    def __repr__(self):
        return '<Colaboradores %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido
        }

class Clientes(db.Model):
    __tablename__ = 'clientes'
    id = db.Column(db.Integer, primary_key=True)
    razonsocial = db.Column(db.String(80), nullable=False)
    rfc = db.Column(db.String(13), unique=True, nullable=False)
    contacto = db.Column(db.String(45), nullable=False)
    girocomercial = db.Column(db.String(80), nullable=True)
    idcolaborador = db.Column(db.Integer, db.ForeignKey('colaboradores.id'))
    colaborador = db.relationship('Colaboradores')

    def __repr__(self):
        return "<Clientes %r>" % self.razonsocial
    
    def serialize(self):
        return {
            "id": self.id,
            "razonsocial": self.razonsocial,
            "rfc": self.rfc,
            "contacto": self.contacto,
            "girocomercial": self.girocomercial,
            "idcolaborador": self.idcolaborador
        }
    
    def serialize(self):
        return {
            "id": self.id,
            "razonsocial": self.razonsocial,
            "rfc": self.rfc,
            "contacto": self.contacto,
            "girocomercial": self.girocomercial,
            "idcolaborador": self.idcolaborador
        }
    
class Usuarios(Base):
    __tablename__ = 'usuarios'
    id = Column(Integer, primary_key=True)
    nombre = Column(String(80), nullable=True)
    rfc = Column(String(13), nullable=False)
    correo = Column(String(60), nullable=True, unique=True)
    password = Column(String(60), nullable=True)
    telefono = Column(String(10), nullable=True)
    admin = Column(BOOLEAN, nullable=True)
    verificado = Column(BOOLEAN, nullable=True)
    token = Column(String(35), nullable=True)

    def __repr__(self):
        return '<Usuarios %r>' % self.nombre
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "rfc": self.rfc,
            "correo": self.correo,
            "telefono": self.telefono,
            "admin": self.admin,
            "verificado": self.verificado
        }
    
class Colaboradores(Base):
    __tablename__ = 'colaboradores'
    id = Column(Integer, primary_key=True)
    nombre = Column(String(45), nullable=False)
    apellido = Column(String(45), nullable=False)

    def __repr__(self):
        return '<Colaboradores %r>' % self.nombre
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido
        }