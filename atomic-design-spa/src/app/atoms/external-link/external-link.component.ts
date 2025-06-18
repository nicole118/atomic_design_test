import { Component, input } from '@angular/core';

@Component({
  selector: 'app-external-link',
  imports: [],
  templateUrl: './external-link.component.html',
  styleUrl: './external-link.component.scss'
})
export class ExternalLinkComponent {
  searchValue = input<string>();
  
  googleSearch() : void {
      const value = this.searchValue() ?? '';
      const googleQuery = encodeURIComponent(value);
      window.open(`https://www.google.com/search?q=${googleQuery}`, '_blank');

  }
}
