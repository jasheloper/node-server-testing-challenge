const db = require("../data/dbConfig.js");

module.exports = {
 readAll,
 readAllById,
 insert,
 destry
};

function readAll() {
  return db("apps");
}


function readAllById(id) {
  return db('apps').where({id}).first();
}


function insert(app) {
  return db('apps').insert(app)
         .then(ids => {
             const [id] = ids;
             return readAllById(id)
         }) 
}


function destroy(id) {
    return db('apps').where('id', id).del()
            .then(count => {
                return db('apps');
            })
            .then(app => {
                return app
            })

