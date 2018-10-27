import { SamplePagesModule } from './sample-pages.module';

describe('SamplePagesModule', () => {
  let samplePagesModule: SamplePagesModule;

  beforeEach(() => {
    samplePagesModule = new SamplePagesModule();
  });

  it('should create an instance', () => {
    expect(samplePagesModule).toBeTruthy();
  });
});
