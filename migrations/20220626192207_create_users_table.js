exports.up = function (knex) {
    return knex.schema
      .createTable('usersInfo', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('username').notNullable()
        table.string('password').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('usersInfo')
  };