import initStructure, { createWaterFlowObject } from './data-structure';

// const sinon = require('sinon');

describe('[data-structure]', () => {
  beforeAll(() => {});
  afterAll(() => {});
  beforeEach(() => {});
  afterEach(() => {});
  it('should create valid object', () => {
    const first = createWaterFlowObject('type', 'random', 1, 2);
    expect(first.cold).toEqual(1);
    expect(first.warm).toEqual(2);
  });
  it('should get/set deviceCount', () => {
    const first = createWaterFlowObject('type', 'random', 1, 2);
    expect(first.deviceCount).toEqual(0);
    first.deviceCount = 3;
    expect(first.deviceCount).toEqual(3);
  });
  it('should create init structure', () => {
    const structure = initStructure();
    expect(structure.drawOffPoints).toHaveLength(13);
  });
  it('should not be able to change type, name, coldWater, warmWater', () => {
    const waterFlow = createWaterFlowObject('type', 'random', 1, 2);
    expect(() => {
      waterFlow.cold = 10;
    }).toThrow();
    expect(() => {
      waterFlow.warm = 10;
    }).toThrow();
    expect(() => {
      waterFlow.type = 'something else';
      expect(waterFlow.name).toEqual('random');
    }).toThrow();
  });
});
