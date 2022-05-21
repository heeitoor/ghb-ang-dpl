import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentBaseComponent } from './child-component-base.component';

describe('ChildComponentBaseComponent', () => {
  let component: ChildComponentBaseComponent;
  let fixture: ComponentFixture<ChildComponentBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponentBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
