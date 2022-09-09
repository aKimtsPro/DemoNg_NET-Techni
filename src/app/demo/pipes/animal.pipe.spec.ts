import { AnimalPipe } from './animal.pipe';

describe('AnimalPipe', () => {
  it('create an instance', () => {
    const pipe = new AnimalPipe();
    expect(pipe).toBeTruthy();
  });
});
