from flask import Flask
#from routes.user import *
from routes.home import *

'''
    Func: create_app
    description: Responsible for managing all of the different routes in the application
    args: none
'''

def create_app():
    app = Flask(__name__)

    #app.register_blueprint(userRoute)
    app.register_blueprint(homeRoute)

    return app