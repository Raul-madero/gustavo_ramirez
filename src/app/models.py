from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, String, ForeignKey, Integer, BOOLEAN
from sqlalchemy.orm import declarative_base, relationship
import pymysql
pymysql.install_as_MySQLdb()
from db import db

Base = declarative_base()

class Colaboradores(db.Model):
    __tablename__ = 'colaboradores'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(45), nullable=False)
    apellido = db.Column(db.String(45), nullable=False)

    def __repr__(self):
        return '<Usuarios %r>' % self.nombre

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
    
class Usuarios(Base):
    __tablename__ = 'usuarios'
    id = Column(Integer, primary_key=True)
    nombre = Column(String(80), nullable=True)
    rfc = Column(String(13), nullable=False)
    correo = Column(String(60), nullable=True, unique=True)
    password = Column(String(60), nullable=True)
    telefono = Column(String(10), nullable=True)
    clienteid = Column(Integer, ForeignKey('clientes.id'))
    cliente = relationship(Clientes)
    colaboradorid = Column(Integer, ForeignKey('colaboradores.id'))
    colaborador = relationship(Colaboradores)
    admin = Column(BOOLEAN, nullable=True)
    verificado = Column(BOOLEAN, nullable=True)
    token = Column(String(35), nullable=True)

    def __repr__(self):
        return '<Usuarios %r>' % self.nombre
    
class Colaboradores(Base):
    __tablename__ = 'colaboradores'
    id = Column(Integer, primary_key=True)
    nombre = Column(String(45), nullable=False)
    apellido = Column(String(45), nullable=False)

    def __repr__(self):
        return '<Colaboradores %r>' % self.nombre