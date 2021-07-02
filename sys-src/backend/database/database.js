const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

class Database {

	//Constructor for the Class.
	//Uri: The mongoDB Uri
	//dbname: The name of the Databank
	constructor(uri, dbname) {
		this.uri = uri;
		this.dbname = dbname;
	}

	//Find the given data (from query) in the MongoDB collection
    find(collection, query = {}) {
		var self = this;
		
		var promise = new Promise(function (resolve, reject) {
			MongoClient.connect(self.uri, { useUnifiedTopology: true }, function(err, db) {
				if (err) throw err;
				var dbo = db.db(self.dbname);
				dbo.collection(collection).find(query).toArray(function(err, result) {
				  if (err) throw err;
				  db.close();
				  resolve(result);
				});
			});
		});
		return promise;
    }

    //Try to update the MongoDB collection, wich get passed through the querry
	update(collection, searchquery, updatequery) {
		var self = this;

		var promise = new Promise(function (resolve, reject) {
			MongoClient.connect(self.uri, { useUnifiedTopology: true }, function(err, db) {
				if (err) throw err;
				var dbo = db.db(self.dbname);
				dbo.collection(collection).updateOne(searchquery, { $set: updatequery }, function(err, res) {
				  if (err) throw err;
				  db.close();
				  resolve(res);
				});
			  }); 
		});
		return promise;
	}

	//Insert a data to Collection in the MongoDB
	insert(collection, data) {
		var self = this;

		var promise = new Promise(function (resolve, reject) {
			MongoClient.connect(self.uri, { useUnifiedTopology: true }, function(err, db) {
				if (err) throw err;
				var dbo = db.db(self.dbname);
				dbo.collection(collection).insertOne(data, function(err, res) {
				  if (err) throw err;
				  db.close();
				  resolve(res);
				});
			});
		});
		return promise;
	}
}

module.exports = Database;