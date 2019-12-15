exports.up = function(knex, Promise) {
  return knex.schema.createTable("apps", tbl => {
    tbl.increments();

    tbl.string("name", 255).notNullable();

    tbl.string("description", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("apps");
};
