import { Test, TestingModule } from '@nestjs/testing';
import { WorkController } from './work.controller';
import { WorkService } from './work.service';

describe('WorkController', () => {
  let workController: WorkController;
  let workService: WorkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkController],
      providers: [
        {
          provide: WorkService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    workController = module.get<WorkController>(WorkController);
    workService = module.get<WorkService>(WorkService);
  });

  it('should be defined', () => {
    expect(workController).toBeDefined();
  });
});
