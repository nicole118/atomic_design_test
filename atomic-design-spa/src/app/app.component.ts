import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppliedTemplatePageComponent } from './pages/applied-template-page/applied-template-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppliedTemplatePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atomic-design-spa';
}
