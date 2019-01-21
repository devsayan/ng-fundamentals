import { MyFeatureModuleModule } from './my-feature-module.module';

describe('MyFeatureModuleModule', () => {
  let myFeatureModuleModule: MyFeatureModuleModule;

  beforeEach(() => {
    myFeatureModuleModule = new MyFeatureModuleModule();
  });

  it('should create an instance', () => {
    expect(myFeatureModuleModule).toBeTruthy();
  });
});
