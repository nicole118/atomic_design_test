import { Component, input } from '@angular/core';

@Component({
  selector: 'app-copy-button',
  imports: [],
  templateUrl: './copy-button.component.html',
  styleUrl: './copy-button.component.scss'
})
export class CopyButtonComponent {
  clipboardValue = input<string>();

  copyText(): void {
    const copiedVal = this.clipboardValue() ?? '';

    navigator.clipboard.writeText(copiedVal)
      .then(() => console.log("Copied data: " + copiedVal))
      .catch(() => console.error("Unable to copy text"));


  }
}
