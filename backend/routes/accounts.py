from flask import Flask, Blueprint, jsonify, g
from Database import *

accountRoute = Blueprint("accounts", __name__)

@accountRoute.route("/login")
def login():
    result = {'message': ["Link", "jack", "sherry"]}
    return jsonify(result)

@accountRoute.route("/signup", method=['Post'])
def signup():
    # g.db = g.mongo_client["sample_mflix"]
    # collection = g.db['comments']
    # data = collection.find_one()
    # print(data)
    result = {'message':"data"}
    return jsonify(result)