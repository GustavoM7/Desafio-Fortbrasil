from app import app, db, lm, cors
from flask import request, jsonify
from flask_login import login_user, logout_user
from app.models.tables import User, Estab, UserSchema, EstabSchema
from werkzeug.security import generate_password_hash, check_password_hash


@app.route("/")
def index():
    return "Olá! Você está no backend da API de gerenciamento de estabelecimentos"


@app.route("/Users", methods=['POST'])
def create_user():
    data = request.get_json()

    if User.query.filter_by(email = data['email']).first() is None:
        encryptPw = generate_password_hash(data['password'], method='pbkdf2:sha256', salt_length=8)

        newUser = User(data['name'], data['email'], encryptPw)
        db.session.add(newUser)
        db.session.commit()

        return data, 201
        
    return jsonify({'error': 'conflict'}), 409


@lm.user_loader
def load_user(id):
    return User.query.filter_by(id = id).first()


@app.route("/Users")
def read_users():
    user = User.query.order_by(User.name).all()
    outputList = []
    for u in user:
        user_schema = UserSchema()
        output = user_schema.dump(u)
        outputList.append(output)

    return jsonify(outputList) , 200


@app.route("/Users/<int:id>", methods=['DELETE'])
def delete_user(id):
    user = User.query.filter_by(id = id).first()
    if user is None:
        return jsonify({'error':'not found'}), 404
    if user.is_authenticated():
        return 200
    return jsonify({'error': 'denied'}), 409


@app.route("/Users/Login", methods=['GET', 'POST'])
def user_login():
    data = request.get_json()
    user = User.query.filter_by(email = data['email']).first()
    if user:
        if check_password_hash(user.password, data['password']):
            login_user(user)
            user_schema = UserSchema()
            res = user_schema.dump(user)
            return jsonify(res), 200
            
        return jsonify({'error': 'conflict'}), 409
    return jsonify({'error':'not found'}), 404


@app.route("/Users/Logout", methods=['GET', 'POST'])
def logout():
    logout_user()
    return 200


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
    teste = User("Teste4", "teste4@teste.com", generate_password_hash('123', method='pbkdf2:sha256', salt_length=8))

    db.session.add(teste)
    db.session.commit()
    return "OK"


@app.route("/TesteSecurity")
def testeS():
    ut = User.query.filter_by(id = 4).first()
    if check_password_hash(ut.password, '123'):
        return "Funciona"

    return "Não funciona"
'''