import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingSchematicsComponent } from './testing-schematics.component';

describe('TestingSchematicsComponent', () => {
  let component: TestingSchematicsComponent;
  let fixture: ComponentFixture<TestingSchematicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingSchematicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingSchematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
