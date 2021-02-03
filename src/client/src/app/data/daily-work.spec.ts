import { DailyRoutine } from './daily-work';

describe('DailyRoutine', () => {
  it('should create an instance', () => {
    expect(new DailyRoutine(0, '', new Date(), new Date())).toBeTruthy();
  });
});
