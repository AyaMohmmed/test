import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashResultComponent } from './dash-result.component';

describe('DashResultComponent', () => {
  let component: DashResultComponent;
  let fixture: ComponentFixture<DashResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
