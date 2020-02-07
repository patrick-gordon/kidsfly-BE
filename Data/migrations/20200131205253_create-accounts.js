
exports.up = function(knex) {
    return knex.schema
    .createTable('traveler', tbl => {
      tbl.increments();

      tbl.text('username', 128)
        .unique()
        .notNullable()

      tbl.string('password', 20)
        .notNullable()

      tbl.string('email', 128)
        .notNullable()
        .unique();

      tbl.string('first_name')
        .notNullable()

      tbl.string('last_name')
        .notNullable()

      tbl.string('address', 128)
        .notNullable()
        .unique()

      tbl.string('home_airport', 50)
        .notNullable()

      tbl.string('phone_number', 20)
        .notNullable()
        
    })

    .createTable('assistant', tbl => {
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

        tbl.integer('trip_traveler_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('travelers')

        tbl.integer('trip_assistant_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('assistant')

          tbl.text("trip_name", 128).notNullable();

          tbl.integer("kids_traveling", 3).notNullable();
      
          tbl.integer("checked_bags", 3);
      
          tbl.integer("carryon_bags", 3);
      
          tbl.integer("car_seats", 3);
      
          tbl.integer("strollers", 3);
      
          tbl.text("notes", 300);
    })

    .createTable('flight_info', tbl => {
      tbl.integer('flight_info_assistant_id')
        .unsigned()
        .references('id')
        .inTable('assistant')
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.integer('flight_info_traveler_id')
        .unsigned()
        .references('id')
        .inTable('traveler')
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.integer('flight_info_trip_id')
        .unsigned()
        .references('id')
        .inTable('trip')
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

        tbl.string("dep_airport", 128).notNullable();
        tbl.string("arr_airport", 128).notNullable();
    
        tbl.string("airline", 128).notNullable();
    
        tbl.integer("dep_flight_num", 10).notNullable();
        tbl.integer("arr_flight_num", 10).notNullable();
    
        tbl.time("dep_time").notNullable();
        tbl.time("arr_time").notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('trip')
    .dropTableIfExists('traveler');
};
