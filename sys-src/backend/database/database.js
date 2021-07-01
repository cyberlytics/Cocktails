const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

class Database {

	constructor(uri, dbname) {
		this.uri = uri;
		this.dbname = dbname;
	}

    find(collection, query = {}) {
		var self = this;
		
		var promise = new Promise(function (resolve, reject) {
			MongoClient.connect(self.uri, function(err, db) {
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

	update(collection, searchquery, updatequery) {
		var self = this;

		var promise = new Promise(function (resolve, reject) {
			MongoClient.connect(self.uri, function(err, db) {
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

	insert(collection, data) {
		var self = this;

		var promise = new Promise(function (resolve, reject) {
			MongoClient.connect(self.uri, function(err, db) {
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