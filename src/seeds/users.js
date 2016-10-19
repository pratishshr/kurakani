const TABLE_NAME = 'users';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex(TABLE_NAME).insert({first_name: 'Pratish', last_name: 'Shrestha'}),
        knex(TABLE_NAME).insert({first_name: 'Sujan', last_name: 'Shrestha'}),
        knex(TABLE_NAME).insert({first_name: 'Ram', last_name: 'Shah'}),
        knex(TABLE_NAME).insert({first_name: 'Shyam', last_name: 'Joshi'}),
        knex(TABLE_NAME).insert({first_name: 'Hari', last_name: 'Malakar'}),
        knex(TABLE_NAME).insert({first_name: 'Gopal', last_name: 'Maharjan'})
      ]);
    });
};
