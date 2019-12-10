
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '23893BN3423',
        Make: 'Jeep',
        Model: 'Renegade', 
        Mileage: 2554, 
        Transmission_Type: 'Automatic', 
        Title_Status: 'Clean' },

        {VIN: '575U29JT',
        Make: 'Toyota',
        Model: 'Corolla', 
        Mileage: 35554, 
        Transmission_Type: 'Automatic', 
        Title_Status: 'Salvage' },

        {VIN: '9349NIW928NG',
        Make: 'Lexus',
        Model: 'IS250', 
        Mileage: 8934, 
        Transmission_Type: 'Automatic', 
        Title_Status: 'Salvage' },

        {VIN: '344YNU2BIB6UB',
        Make: 'Ford',
        Model: 'F-150', 
        Mileage: 10983, 
        Transmission_Type: 'Automatic', 
        Title_Status: 'Clean' },
      ]);
    });
};
