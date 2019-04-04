import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgtComponent } from './imgt.component';

describe('ImgtComponent', () => {
  let component: ImgtComponent;
  let fixture: ComponentFixture<ImgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
