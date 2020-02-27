
exports.up = function (knex) {
    return knex.schema.createTable('posts', tbl => {
        tbl.increments();

        tbl.string('title', 255)
            .notNullable()
            .index()

        tbl.string('contents', 500)
            .notNullable()
    }).createTable('categories', tbl => {
        tbl.increments();

        tbl.string('name', 255)
            .notNullable()
            .unique();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('categories')
        .dropTableIfExists('posts');
};
