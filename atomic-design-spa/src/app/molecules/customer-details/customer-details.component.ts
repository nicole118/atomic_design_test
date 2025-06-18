import { Component, input } from '@angular/core';
import { ContentTextComponent } from "../../atoms/content-text/content-text.component";
import { ExternalLinkComponent } from "../../atoms/external-link/external-link.component";
import { IconComponent } from "../../atoms/icon/icon.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  imports: [ContentTextComponent, ExternalLinkComponent, IconComponent, NgIf],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent {
  iconType = input<string>();
  textType = input<string>();
  textContent = input<string>();
}
