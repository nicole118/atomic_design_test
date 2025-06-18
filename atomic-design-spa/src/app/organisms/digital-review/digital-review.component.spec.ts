import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalReviewComponent } from './digital-review.component';

describe('DigitalReviewComponent', () => {
  let component: DigitalReviewComponent;
  let fixture: ComponentFixture<DigitalReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
