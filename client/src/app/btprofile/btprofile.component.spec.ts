import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtprofileComponent } from './btprofile.component';

describe('BtprofileComponent', () => {
  let component: BtprofileComponent;
  let fixture: ComponentFixture<BtprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
