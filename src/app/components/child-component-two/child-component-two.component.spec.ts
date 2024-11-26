import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentTwoComponent } from './child-component-two.component';

describe('ChildComponentTwoComponent', () => {
  let component: ChildComponentTwoComponent;
  let fixture: ComponentFixture<ChildComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponentTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
