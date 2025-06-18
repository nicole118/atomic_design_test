import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [NgIf],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  iconType = input<string>();

  chooseIcon() : string {
    switch(this.iconType()) {
      case "id":
        return "id";
      case "avatar":
        return "avatar";
      case "shipping":
        return "shipping";
      case "email":
        return "email";
      case "mobile":
        return "mobile";
      default:
        return "Icon Type does not exist.";
    }
  }
}
