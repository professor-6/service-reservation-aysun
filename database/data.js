const faker = require('faker');
var fs = require('fs');

var generateReservations = function() {
    var bookings = [];
    for (var i = 0; i < 5; i++) {
      var data = {};
      data.table = Math.ceil(Math.random() * 20)
      data.date = faker.date.between('2019-04-27', '2019-06-27').toISOString().slice(0, 10);
      data.time = faker.random.objectElement({10: 600, 1030: 630, 11: 660, 1130: 690, 12: 720, 1230: 750, 1: 780, 130: 810, 2: 840, 230: 870, 3: 900, 330: 930, 4: 960, 430: 990, 5: 1020, 530: 1050, 6: 1080, 630: 1110, 7: 1140, 730: 1170, 8: 1200, 830: 1230, 9: 1260, 930: 1290, 10: 1320, 1030: 1350, 11: 1380, 1130: 1410
      });
      data.partySize = faker.random.objectElement({two: 2, four: 4, six: 6, eight: 8});
      bookings.push(data);
    }
  return bookings;
}

let generateTables = () => {
  let tables = [];
  for (let i = 1; i < 4; i++) {
    let data = {};
    data.table = i;
    data.maxOccupancy = faker.random.objectElement({two: 2, four: 4, six: 6, eight: 8});
    tables.push(data)
  }
  return tables;
}

let count = 0;
let generateRestaurants = () => {
  count++;
  return count;
}
module.exports = {
  generateTables, generateReservations, generateRestaurants
}
