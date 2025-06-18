import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header-text',
  imports: [],
  templateUrl: './header-text.component.html',
  styleUrl: './header-text.component.scss'
})
export class HeaderTextComponent {
  headerText = input<string>();
}
