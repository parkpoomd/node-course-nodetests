const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
  });

  it('shoule async square a number', (done) => {
    utils.asyncSquare(3, (res) => {
      expect(res).toBe(9).toBeA('number');
      done();
    });
  });
});

// should verify first and last names are set
// assert it includes firstName and lastName with properties values
it('should set firstName and lastName', () => {
  var user = {locaiton: 'Bangkok', age: 33};
  var res = utils.setName(user, 'Parkpoom Pongsawat');

  // expect(user).toEqual(res);
  expect(res).toInclude({
    firstName: 'Parkpoom',
    lastName: 'Pongsawat'
  });
});

// it('should expect some values', () => {
//   // expect(1).toNotBe(11);
//   // expect({name: 'Parkpoom'}).toEqual({name: 'Parkpoom'});
//   // expect([2, 3, 4]).toExclude(1);
//   expect({
//     name: 'Parkpoom',
//     age: 33,
//     location: 'Bangkok'
//   }).toInclude({
//     age: 33
//   })
// });
