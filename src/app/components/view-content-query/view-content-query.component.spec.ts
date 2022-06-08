import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContentQueryComponent } from './view-content-query.component';

describe('ViewContentQueryComponent', () => {
  let component: ViewContentQueryComponent;
  let fixture: ComponentFixture<ViewContentQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContentQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContentQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
