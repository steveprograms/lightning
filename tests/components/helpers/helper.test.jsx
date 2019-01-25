import React from 'react';
import { mount } from 'enzyme';

describe('helper', () => {
  let fs
  , helper
  , filePath;

  beforeEach(() => {
    jest.resetModules();

    filePath = './src/data/user-data.json';

    fs = {
      writeFileSync: jest.fn(),
      readFileSync: jest.fn(),
    };

    jest.setMock('fs', fs);

    helper = require('../../../src/components/helpers/helper');
  });

  it('saveStateToFile', () => {
    helper.saveStateToFile();
    expect(fs.writeFileSync).toBeCalled();
  });

  it('distanceBetweenPlanets', () => {
    expect(helper.distanceBetweenPlanets(
      {x_coord: 3, y_coord: 4},
      {x_coord: 10, y_coord: 18}
    )).toEqual(16);
  });

  it('parseDataFile', () => {
    helper.parseDataFile();
    expect(fs.readFileSync).toBeCalled();
    expect(fs.writeFileSync).toBeCalled();
  });
});
