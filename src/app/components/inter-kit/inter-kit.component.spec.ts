/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InterKitComponent } from './inter-kit.component';

describe('InterKitComponent', () => {
  let component: InterKitComponent;
  let fixture: ComponentFixture<InterKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
