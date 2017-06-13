var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/intro-graphql";

const Query = {
    users() {
        return new Promise(
            function (resolve, reject) {
                MongoClient.connect(url, function (err, db) {
                    let collection = db.collection('users');
                     collection.find().toArray(function(err, docs) {
                        db.close();
                        resolve(docs)
                    });
                })
            })
    }
};
export default Query;