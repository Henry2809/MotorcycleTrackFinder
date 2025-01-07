from flask import Flask, g
#from routes.user import *
from routes.home import *
from routes.accounts import *
from pymongo import MongoClient


'''
    Func: create_app
    description: Responsible for managing all of the different routes in the application
    args: none
'''

def create_app():
    app = Flask(__name__)

    # Apply the middleware
    # app.wsgi_app = MongoDBMiddleware(app.wsgi_app)
    #print(app.app_context())

    # db = client.flask_db
    # todos = db.sample_mflix

    #app.register_blueprint(userRoute)
    app.register_blueprint(homeRoute)
    # app.register_blueprint(accountRoute)

    return app