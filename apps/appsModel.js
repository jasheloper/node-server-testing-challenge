const db = require("../data/dbConfig.js");

module.exports = {
  create,
  destroy,
  readAll
};

async function create(app) {
  const [id] = await db("apps").create(app);

  return db("apps")
    .where({ id })
    .first();
}

function destroy(id) {
  return null;
}

function readAll() {
  return db("apps");
}
