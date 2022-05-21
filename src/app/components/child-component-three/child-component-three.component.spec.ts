import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentThreeComponent } from './child-component-three.component';

describe('ChildComponentThreeComponent', () => {
  let component: ChildComponentThreeComponent;
  let fixture: ComponentFixture<ChildComponentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponentThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
