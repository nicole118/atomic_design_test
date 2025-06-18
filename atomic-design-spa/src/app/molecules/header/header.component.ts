import { Component, input } from '@angular/core';
import { IconComponent } from "../../atoms/icon/icon.component";
import { HeaderTextComponent } from "../../atoms/header-text/header-text.component";
import { ExternalLinkComponent } from "../../atoms/external-link/external-link.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [IconComponent, HeaderTextComponent, ExternalLinkComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerText = input<string>();
  iconType = input<string>();
  headerType = input<string>();
}
