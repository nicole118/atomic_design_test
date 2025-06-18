import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedTemplatePageComponent } from './applied-template-page.component';

describe('AppliedTemplatePageComponent', () => {
  let component: AppliedTemplatePageComponent;
  let fixture: ComponentFixture<AppliedTemplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppliedTemplatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
