let TestMe = require('../app/testMe')
let testMeInstance = new TestMe()

it('does something', () => {
  expect(testMeInstance.firstFunction()).toEqual(2)
});
