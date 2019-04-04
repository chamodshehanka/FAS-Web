import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EltnComponent } from './eltn.component';

describe('EltnComponent', () => {
  let component: EltnComponent;
  let fixture: ComponentFixture<EltnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EltnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EltnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
