
exports.up = function(knex) {
    return knex.schema
    .createTable('traveler', tbl => {
      tbl.increments();
      tbl.text('username', 128)
        .unique()
        .notNullable();
      tbl.string('password', 20)
        .notNullable()
      tbl.string('email', 128)
        .notNullable()
        .unique();
      tbl.string('address', 128)
        .notNullable()
        .unique()
      tbl.string('home_airport', 50)
        .notNullable()
      tbl.string('phone_number', 20)
        .notNullable()
        .unique()
    })
    .createTable('kids_fly_connector', tbl => {
      tbl.increments()
      tbl.string('email', 50)
        .notNullable()
      tbl.string('username', 50)
        .notNullable()
      tbl.string('password', 20)
        .notNullable()
      
    })
    .createTable('trip', tbl => {
        tbl.increments();
        tbl.integer('traveler_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('travelers')
        tbl.integer('kids_fly_connector_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('kids_fly_connector')
        tbl.string('airport_name', 50)
            .notNullable()
        tbl.string('Airline', 30)
            .notNullable()
        tbl.integer('flight_number', 15)
            .notNullable()
        tbl.blob('departure_time', 10)
            .notNullable()
        tbl.integer('carry_on_bags')
            .notNullable()
        tbl.integer('checked_bags')
            .notNullable()
        tbl.integer('number_of_children')
            .notNullable()
        tbl.blob('special_needs', 500)
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('trip')
    .dropTableIfExists('traveler');
};
