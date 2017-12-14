import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesformComponent } from './recipesform.component';

describe('RecipesformComponent', () => {
  let component: RecipesformComponent;
  let fixture: ComponentFixture<RecipesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
