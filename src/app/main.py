from flask import jsonify, request
from db import app, db   
from models import Clientes
from flask_migrate import Migrate

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


@app.route('/api/clientes/<int:cliente_id>', methods=['DELETE', 'GET', 'PUT'])
def buscar_clientes(cliente_id):
    cliente = Clientes.query.get_or_404(cliente_id)
    if request.method == 'DELETE':
        db.session.delete(cliente)
        db.session.commit()
        return jsonify({'message': 'Cliente eliminado correctamente'}), 204
    if request.method == 'GET':
        cliente_editable = {'id': cliente.id, 'razonsocial': cliente.razonsocial, 'rfc': cliente.rfc, 'contacto': cliente.contacto, 'girocomercial': cliente.girocomercial, 'idcolaborador': cliente.idcolaborador}
        return jsonify(cliente_editable), 200
    if request.method == 'PUT':
        editar = request.get_json()
        cliente.razonsocial = editar.razonsocial
        cliente.rfc = editar.rfc
        cliente.contacto = editar.contacto
        cliente.girocomercial = editar.girocomercial
        db.session.commit()

@app.route('/api/clientes', methods=['POST'])
def crear_cliente():
    cliente = request.get_json()
    
    nuevo_cliente = Clientes(razonsocial=cliente['razonsocial'], rfc=cliente['rfc'], contacto=cliente['contacto'], girocomercial=cliente['giroComercial'], idcolaborador=cliente['colaboradorid'])
    db.session.add(nuevo_cliente)
    db.session.commit()
    print(cliente)
    return jsonify(cliente), 201

migrate = Migrate(app, db)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)