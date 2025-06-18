import { NgIf } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-content-text',
  imports: [NgIf],
  templateUrl: './content-text.component.html',
  styleUrl: './content-text.component.scss'
})
export class ContentTextComponent {
  textType = input<string>();
  textContent = input<string>();

  isTextTypeNormal() : boolean {
    if(this.textType() == "normal") 
    {
      return true;
    }
    else  {
      return false;
    }
  }
}
