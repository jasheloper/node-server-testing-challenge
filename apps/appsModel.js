const db = require("../data/dbConfig.js");

module.exports = {
 find,
 findById,
 insert,
 destroy
};

function find() {
  return db("apps");
}


function findById(id) {
  return db('apps').where({id}).first();
}


function insert(app) {
  return db('apps').insert(app)
         .then(ids => {
             const [id] = ids;
             return findById(id)
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
          }
