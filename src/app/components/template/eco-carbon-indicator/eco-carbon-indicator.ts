import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-eco-carbon-indicator',
  standalone: true,
  imports: [],
  templateUrl: './eco-carbon-indicator.html',
  styleUrl: './eco-carbon-indicator.css',
})
export class EcoCarbonIndicator {
  @Input() value = 0;
}
