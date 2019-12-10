
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments();
        table.integer('VIN').notNullable().unique().index()
        table.string('Make', 500).notNullable().index()
        table.string('Model', 500).notNullable().index()
        table.integer('Mileage').notNullable().unique().index()
        table.string('Transmission Type', 500).index()
        table.string('Title Status', 500).index()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
