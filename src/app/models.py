<<<<<<< HEAD
from sqlalchemy import Column, String, Integer, BOOLEAN
=======
from sqlalchemy import Column, String, Integer
>>>>>>> f719d3aab224ad48fcd2b404d8e74863c8724f8a
from sqlalchemy.orm import declarative_base
import pymysql
pymysql.install_as_MySQLdb()
from db import db

Base = declarative_base()

class Colaboradores(Base):
    __tablename__ = 'colaboradores'
    id = Column(Integer, primary_key=True)
    nombre = Column(String(45), nullable=False)
    apellido = Column(String(45), nullable=False)

    def __repr__(self):
<<<<<<< HEAD
        return '<Colaboradores %r>' % self.nombre

=======
        return '<Usuarios %r>' % self.nombre
    
>>>>>>> f719d3aab224ad48fcd2b404d8e74863c8724f8a
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido
        }

class Clientes(Base):
    __tablename__ = 'clientes'
    id = Column(Integer, primary_key=True)
    razonsocial = Column(String(80), nullable=False)
    rfc = Column(String(13), unique=True, nullable=False)
    contacto = Column(String(45), nullable=False)
    girocomercial = Column(String(80), nullable=True)
    idcolaborador = Column(Integer, db.ForeignKey('colaboradores.id'))
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
    
class Usuarios(Base):
    __tablename__ = 'usuarios'
    id = Column(Integer, primary_key=True)
    nombre = Column(String(80), nullable=True)
    rfc = Column(String(13), nullable=False)
    correo = Column(String(60), nullable=True, unique=True)
    password = Column(String(60), nullable=True)
    telefono = Column(String(10), nullable=True)
<<<<<<< HEAD
    admin = Column(BOOLEAN, nullable=True)
    verificado = Column(BOOLEAN, nullable=True)
=======
>>>>>>> f719d3aab224ad48fcd2b404d8e74863c8724f8a
    token = Column(String(35), nullable=True)

    def __repr__(self):
        return '<Usuarios %r>' % self.nombre
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "rfc": self.rfc,
            "correo": self.correo,
<<<<<<< HEAD
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
=======
            "telefono": self.telefono
>>>>>>> f719d3aab224ad48fcd2b404d8e74863c8724f8a
        }