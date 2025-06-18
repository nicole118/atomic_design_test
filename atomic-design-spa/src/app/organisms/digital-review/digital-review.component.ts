import { Component, input } from '@angular/core';
import { HeaderComponent } from "../../molecules/header/header.component";
import { DisplayBoxComponent } from "../../molecules/display-box/display-box.component";

@Component({
  selector: 'app-digital-review',
  imports: [HeaderComponent, DisplayBoxComponent],
  templateUrl: './digital-review.component.html',
  styleUrl: './digital-review.component.scss'
})
export class DigitalReviewComponent {
    textContent = input<string>();
}
