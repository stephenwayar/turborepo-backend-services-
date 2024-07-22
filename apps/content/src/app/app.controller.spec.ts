import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('api status', () => {
    it('should return "Content service"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getApiStatus()).toEqual({ message: 'Content service', success: true });
    });
  });
});
