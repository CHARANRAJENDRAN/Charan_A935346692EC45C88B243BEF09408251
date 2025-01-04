from flask import Flask, render_template, request, jsonify
from model.generator import generate_description

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    product_name = data.get('product_name', '')
    features = data.get('features', [])
    category = data.get('category', '')
    audience = data.get('audience', '')

    description = generate_description(product_name, features, category, audience)
    return jsonify({"description": description})

if __name__ == '__main__':
    app.run(debug=True)
