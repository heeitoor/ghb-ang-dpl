import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentOneComponent } from './child-component-one.component';

describe('ChildComponentOneComponent', () => {
  let component: ChildComponentOneComponent;
  let fixture: ComponentFixture<ChildComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponentOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
