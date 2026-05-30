from flask import Flask, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO
import random
import time
import threading

app = Flask(__name__)
CORS(app)

socketio = SocketIO(app,cors_allowed_origins="*",async_mode="threading")

@app.route("/")
def home():
    return "Smart Crowd Management API Running"
@app.route("/api/crowd")
def crowd():
    return jsonify({
        "zoneA": random.randint(50, 200),
        "zoneB": random.randint(30, 150),
        "zoneC": random.randint(20, 100)
    })

# Background live data generator
def generate_data():
    while True:
        data = {
            "zoneA": random.randint(50, 200),
            "zoneB": random.randint(30, 150),
            "zoneC": random.randint(20, 100)
        }

        socketio.emit("crowd_update", data)
        time.sleep(2)

threading.Thread(target=generate_data, daemon=True).start()

if __name__ == "__main__":
    print(app.url_map)
    socketio.run(app, port=8000)
