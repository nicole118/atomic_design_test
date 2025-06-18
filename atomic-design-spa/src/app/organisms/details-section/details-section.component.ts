import { Component, input } from '@angular/core';
import { HeaderComponent } from "../../molecules/header/header.component";
import { CustomerDetailsComponent } from '../../molecules/customer-details/customer-details.component';
import { CopyButtonComponent } from "../../atoms/copy-button/copy-button.component";

@Component({
  selector: 'app-details-section',
  imports: [HeaderComponent, CustomerDetailsComponent, CopyButtonComponent],
  templateUrl: './details-section.component.html',
  styleUrl: './details-section.component.scss'
})
export class DetailsSectionComponent {
  copiedText = input<string>();
  iconType = input<string>();
  headerText = input<string>();
  headerType = input<string>();
}
