import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-eco-alert',
  standalone: true,
  imports: [],
  templateUrl: './eco-alert.html',
  styleUrl: './eco-alert.css',
})
export class EcoAlert {
  @Input() type: 'success' | 'warning' | 'danger' = 'success';
}
