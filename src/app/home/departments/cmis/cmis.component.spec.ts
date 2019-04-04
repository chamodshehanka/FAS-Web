import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmisComponent } from './cmis.component';

describe('CmisComponent', () => {
  let component: CmisComponent;
  let fixture: ComponentFixture<CmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
