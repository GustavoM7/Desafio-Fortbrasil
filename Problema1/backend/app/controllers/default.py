from app import app


@app.route("/")
def index():
    return "Olá! Você está no backend da API de gerenciamento de estabelecimentos"