import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybtprofileComponent } from './mybtprofile.component';

describe('MybtprofileComponent', () => {
  let component: MybtprofileComponent;
  let fixture: ComponentFixture<MybtprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybtprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybtprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
