from app import manager, app
from flask_cors import CORS

cors = CORS(app, resources={r"/*": {"origins": "*"}})

if __name__ == "__main__":
    manager.run()