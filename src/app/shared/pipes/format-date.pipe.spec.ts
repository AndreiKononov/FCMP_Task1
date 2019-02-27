import { FormatDatePipe } from './format-date.pipe';

describe('FormatDatePipe:', () => {
  const pipe = new FormatDatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    expect(pipe.transform("")).toBeNull();
  });

  it('create an instance', () => {
    expect(pipe.transform("2019-02-07T17:00:00Z")).toBe("07/02/19, 20:00");
  });

  it('create an instance', () => {
    expect(pipe.transform("2019-02-07T17:00:00Z", "DD MMM YYYY")).toBe("07 Feb 2019");
  });
});
