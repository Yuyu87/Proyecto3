import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbtComponent } from './listbt.component';

describe('ListbtComponent', () => {
  let component: ListbtComponent;
  let fixture: ComponentFixture<ListbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
