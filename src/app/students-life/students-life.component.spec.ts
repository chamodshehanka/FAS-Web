import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsLifeComponent } from './students-life.component';

describe('StudentsLifeComponent', () => {
  let component: StudentsLifeComponent;
  let fixture: ComponentFixture<StudentsLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
