import { Component, input } from '@angular/core';
import { ContentTextComponent } from "../../atoms/content-text/content-text.component";

@Component({
  selector: 'app-display-box',
  imports: [ContentTextComponent],
  templateUrl: './display-box.component.html',
  styleUrl: './display-box.component.scss',
})

export class DisplayBoxComponent {
    textContent = input<string>();
}
