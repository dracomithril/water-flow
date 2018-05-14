import { WaterTypeFlow } from './data-structure';

// const sinon = require('sinon');

describe('[data-structure]', () => {
  beforeAll(() => {});
  afterAll(() => {});
  beforeEach(() => {});
  afterEach(() => {});
  it('should create valid object', () => {
    const first = WaterTypeFlow('random', 1, 1, 1);
    expect(first.flowSum).toEqual(2);
  });
});
