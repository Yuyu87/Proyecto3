import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbtprofileComponent } from './editbtprofile.component';

describe('EditbtprofileComponent', () => {
  let component: EditbtprofileComponent;
  let fixture: ComponentFixture<EditbtprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbtprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbtprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
