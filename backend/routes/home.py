from flask import Flask, Blueprint, jsonify


homeRoute = Blueprint("home", __name__)

@homeRoute.route("/")
def home():
    result = {'message': 'hi welcome to Motocylce Track Finder2'}
    return jsonify(result)
