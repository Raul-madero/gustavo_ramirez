from flask import Flask
from flask import jsonify, request
from flask_cors import CORS
from db import db   
from models import Clientes
from flask_migrate import Migrate
from dotenv import load_dotenv
load_dotenv()
import os

host = os.getenv("DB_HOST")
user = os.getenv("DB_USERNAME")
psswd = os.getenv("DB_PASSWORD")
port = os.getenv("DB_PORT")
database = os.getenv("DB_NAME")


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql://{user}:{psswd}@{host}:{port}/{database}"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.init_app(app)
    return app

app = create_app()

@app.route('/api/clientes', methods=['GET'])
def get_clientes():
    page = request.args.get('page', 1, type=int)
    per_page = 8
    search_term = request.args.get('search', '', type=str)
    clientes_pagination = (Clientes.query.filter(
        (Clientes.razonsocial.ilike(f'%{search_term}%') |
        Clientes.rfc.ilike(f'%{search_term}%'))
        ).paginate(page=page, per_page=per_page))
    lista = [{'id': cliente.id, 'razonsocial': cliente.razonsocial, 'rfc': cliente.rfc, 'contacto': cliente.contacto, 'girocomercial': cliente.girocomercial, 'idcolaborador': cliente.idcolaborador} for cliente in clientes_pagination]
    return jsonify({'clientes': lista, 
                    'total_pages': clientes_pagination.pages,
                    'current_page': clientes_pagination.page,
                    'total_items': clientes_pagination.total
                    }), 200


@app.route('/api/clientes/<int:cliente_id>', methods=['DELETE'])
def delete_cliente(cliente_id):
    cliente = Clientes.query.get_or_404(cliente_id)
    db.session.delete(cliente)
    db.session.commit()
    return jsonify({'message': 'Cliente eliminado correctamente'}), 204

@app.route('/api/clientes', methods=['POST'])
def crear_cliente(razonsocial, rfc, contacto, girocomercial, idcolaborador):
    cliente = Clientes(razonsocial=razonsocial, rfc=rfc, contacto=contacto, girocomercial=girocomercial, idcolaborador=idcolaborador)
    db.session.add(cliente)
    db.session.commit()
    return jsonify({'message': 'El usuario se ha creado correctamente'}), 201

migrate = Migrate(app, db)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)