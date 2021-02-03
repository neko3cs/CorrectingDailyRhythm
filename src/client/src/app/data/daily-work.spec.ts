import { DailyWork } from './daily-work';

describe('DailyWork', () => {
  it('should create an instance', () => {
    expect(new DailyWork(0, '', new Date(), new Date())).toBeTruthy();
  });
});
