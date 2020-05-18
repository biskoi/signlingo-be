exports.up = function(knex) {
    knex.schema.alterTable("Level_5", tbl => {
            tbl.increments();
            tbl.integer('User_ID')
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users");
            tbl.integer('Level')
                .notNullable().atler();
            tbl.boolean("Lesson")
                .notNullable();
            tbl.boolean("Practice")
                .notNullable();
            tbl.boolean("Quiz")
                .notNullable();
            tbl.boolean("Active")
                .notNullable();
            tbl.string("signs")
                .notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("Level_5")
};