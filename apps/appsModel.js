const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  destroy,
  readAll
};

async function insert(app) {
  const [id] = await db("apps").insert(app);

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
