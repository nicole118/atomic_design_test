import { Component, input } from '@angular/core';
import { DigitalReviewComponent } from "../../organisms/digital-review/digital-review.component";
import { DetailsSectionComponent } from "../../organisms/details-section/details-section.component";

@Component({
  selector: 'app-layout-page',
  imports: [DigitalReviewComponent, DetailsSectionComponent],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss'
})
export class LayoutPageComponent {
    copiedText = input<string>();
    iconType = input<string>();
    headerText = input<string>();
    headerType = input<string>();
}
