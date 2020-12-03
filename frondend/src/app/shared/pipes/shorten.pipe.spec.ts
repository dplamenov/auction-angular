import { ShortenPipe } from './shorten.pipe';

describe('ShortenPipe', () => {

  let pipe: ShortenPipe;
  beforeEach(() => {
    pipe = new ShortenPipe();
  });

  it('create an instance', () => {
    const pipe = new ShortenPipe();
    expect(pipe).toBeTruthy();
  });

  it('should keep "abcdef"', () => {
    expect(pipe.transform('abcdef', 10)).toBe('abcdef');
  });

  it('should keep "1234"',  () => {
    expect(pipe.transform('1234', 5)).toBe('1234');
  });
});
