import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcDetailComponent } from './oc-detail.component';

describe('OcDetailComponent', () => {
  let component: OcDetailComponent;
  let fixture: ComponentFixture<OcDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
