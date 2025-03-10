import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWithoutStandaloneComponent } from './test-without-standalone.component';

describe('TestWithoutStandaloneComponent', () => {
  let component: TestWithoutStandaloneComponent;
  let fixture: ComponentFixture<TestWithoutStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestWithoutStandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestWithoutStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
