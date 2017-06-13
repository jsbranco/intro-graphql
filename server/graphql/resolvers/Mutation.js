var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/intro-graphql";
var ObjectId = require('mongodb').ObjectId;

const Mutation = {
    updateUsername(_, {userId, username}){
        return new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
                let collection = db.collection('users');
                console.log(userId, username)
                collection.findAndModify(
                    {"_id": new ObjectId(userId)},
                    [],
                    {$set: {username: username}},
                    {new: true},
                    function (err, docs) {
                        console.log(err, docs)
                        db.close();
                        resolve(docs.value)
                    })

            });
        });
    }
};
export default Mutation;