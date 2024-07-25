


from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS

# MongoDB connection string
mongo_uri = 'mongodb+srv://demotest002255:AjbtSPBIm29pX99s@cluster0.8v7cegp.mongodb.net/placeorder'
client = MongoClient(mongo_uri)
db = client.get_database()

# Define the collection
orders_collection = db.orders


@app.route('/api/place-order', methods=['POST'])
def place_order():
    try:
        order_data = request.json
        if not order_data:
            return jsonify({'message': 'No order data provided'}), 400
        
        orders_collection.insert_one(order_data)
        return jsonify({'message': 'Order placed successfully!'}), 200
    except Exception as e:
        return jsonify({'message': 'Failed to place order.', 'error': str(e)}), 500

@app.route('/api/get-location', methods=['GET'])
def get_location():
    token = 'abd1e044906f2d'  # Your IPinfo API token
    try:
        response = requests.get(f'http://ipinfo.io/json?token={token}')
        response.raise_for_status()
        data = response.json()
        return jsonify({
            'location': {
                'city': data.get('city', ''),
                'country': data.get('country', ''),
                'region': data.get('region', ''),
                'zip': data.get('postal', '')
            }
        })
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)


