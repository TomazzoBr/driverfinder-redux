import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Get company profile"', () => {
      expect(appController.getCompanyProfile()).toBe('Get company profile');
    });
    it('should return "Get driver profile"', () => {
      expect(appController.getDriverProfile()).toBe('Get driver profile');
    });
    it('should return "Post company profile"', () => {
      expect(appController.postCompanyProfile()).toBe('Post company profile');
    });
    it('should return "Post driver profile"', () => {
      expect(appController.postDriverProfile()).toBe('Post driver profile');
    });
    it('should return "Post jobs"', () => {
      expect(appController.postJobs()).toBe('Post jobs');
    });
  });
});
