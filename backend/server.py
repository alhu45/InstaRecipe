from flask import Flask, jsonify, request
from flask_cors import CORS
#request allows for http requests to be satisfied
import requests

#create instance of flask class and call CORS to allow for cross region requests
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def get_recipes():
    # Extract query parameters
    api_key ='00fbe25dae97446bbdbe1b8fc392eedf'
    ingredients = request.args.get('ingredients', 'tomatoes,chicken,rice')
    number = request.args.get('number', 1)
    ranking = request.args.get('ranking', 1)

    # Spoonacular API endpoint and parameters
    url = "https://api.spoonacular.com/recipes/findByIngredients"
    params = {
        'ingredients': ingredients,
        'number': number,
        'ranking': ranking,
        'apiKey': api_key
    }

    # Make a GET request to the Spoonacular API
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        # If the request was successful, return the JSON response
        recipes = response.json()
        return jsonify(recipes)
    else:
        # If the request failed, return an error message and status code
        return jsonify({"error": f"Failed to retrieve recipes. Status code: {response.status_code}"}), response.status_code
    
if __name__ == '__main__':
    app.run(debug=True)

