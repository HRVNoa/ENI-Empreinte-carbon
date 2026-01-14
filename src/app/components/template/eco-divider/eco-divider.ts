import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-eco-divider',
  standalone: true,
  imports: [],
  templateUrl: './eco-divider.html',
  styleUrl: './eco-divider.css',
})
export class EcoDivider {

  @Input() visible : boolean = true;

}
