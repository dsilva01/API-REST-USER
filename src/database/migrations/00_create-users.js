exports.up = async function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").notNull().unsigned().primary();
    table.string("name").notNull();
    table.string("email").notNull();
    table.string("password").notNull();
    table.enum("gender", ["M", "F"]).notNull(); 
    table.string("born_date").notNull(); 
  });
}

exports.down = async function (knex) {
  return knex.schema.dropTable("users");
}