from pymongo import MongoClient 

class DatabaseDriver:
    def __init__(self, collection):
        self.collection = ""
        self.uri = ""
        self.conn = None
        self.connColl = self.createConnection() 

    def createConnection(self):
        self.conn = MongoClient(self.uri)
        db = self.conn["motorcycle_track_finder"]
        return db[self.collection]

    def closeConn(self):
        result = self.conn.close()
        return result

    def findOne(self, query):
        data = self.connColl.find_one(query)
        # self.closeConn()
        return data

    def createOne(self, collectionData):
        data = self.connColl.insert_one(collectionData)
        # self.closeConn
        return data


    # def __call__(self, environ, start_response):
    #     # Connect to MongoDB before each request
    #     mongo_client = MongoClient(self.uri)
    #     # g.db = g.mongo_client[""]

    #     # Process the request
    #     response = self.app(environ, start_response)

    #     # Close the MongoDB connection after each request
    #     mongo_client.close()
    #     return response