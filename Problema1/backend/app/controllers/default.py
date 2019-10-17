from app import app, db
from flask import request, jsonify
from app.models.tables import User, Estab, UserSchema, EstabSchema


@app.route("/")
def index():
    return "Olá! Você está no backend da API de gerenciamento de estabelecimentos"


@app.route("/Users", methods=['POST'])
def create_user():
    data = request.get_json()
    if User.query.filter_by(email == data['email']).first() is None:
        return jsonify({'error': 'conflict'}), 409

    newUser = User(data['name'], data['email'], data['password'])
    db.session.add(newUser)
    db.session.commit()

    return data, 201

@app.route("/Users")
def read_users():
    user = User.query.order_by(User.name).all()
    outputList = []
    for u in user:
        user_schema = UserSchema()
        output = user_schema.dump(u)
        outputList.append(output)

    return jsonify(outputList) , 200


@app.route("/Estabs", methods=['POST'])
def create_estab():
    data = request.get_json()
    if Estab.query.filter_by(phone = data['phone']).first() is None:
        return jsonify({'error': 'conflict'}), 409

    newEstab = Estab(data['phone'], data['name'], data['adress'], data['owner'])
    db.session.add(newEstab)
    db.session.commit()

    return data, 201


@app.route("/Estabs")
def read_estabs():
    estb = Estab.query.order_by(Estab.name).all()
    outputList = []
    for e in estb:
        user_schema = UserSchema()
        output = user_schema.dump(e)
        outputList.append(output)

    return jsonify(outputList) , 200


@app.route("/Estabs/<int:id>", methods=['PUT'])
def update_estab(id):
    estb = Estab.query.filter_by(id = id).first()
    if estb is None:
        return jsonify({'error':'not found'}), 404

    newPhone = request.get_json().get('phone')
    if Estab.query.filter_by(id = newPhone).first() is None:
        estb.phone = newPhone
        estb.name = request.get_json().get('name')
        estb.adress = request.get_json().get('adress')
        db.session.add(estb)
        db.session.commit()

        return 201

    return jsonify({'error': 'conflict'}), 409


@app.route("/Estabs/<int:id>", methods=['DELETE'])
def delete_estab(id):
    estb = Estab.query.filter_by(id = id).first()
    if estb is None:
        return jsonify({'error':'not found'}), 404

    db.session.delete(estb)
    db.session.commit()

    return jsonify({'message' : 'deleted'}), 200


'''@app.route("/Teste")
def teste():
    teste = User("Teste3", "teste3@teste.com", "123")

    db.session.add(teste)
    db.session.commit()
    return "OK" '''