# Database middleware

## Description
This folder is responsible for storing the middleware nessecary to communicate with the mongo database. It does this by using DatabaseDriver class as the main class or parent class and having the different collections inhert from it.

The end goal is to have each collection have it's own class so we can personalize it to meet the needs of the data.

## DatabaseDriver
This class is the main class controlling the connection between the application and the mongo database. This class initalizes by taking the collection name for the db to connect to. Once a connection is established the object is saved in **this.Conn** and the collection connection object is saved in the variable **self.connColl**.

## AccountDB