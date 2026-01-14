import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-eco-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './eco-button.html',
  styleUrl: './eco-button.css',
})
export class EcoButton {

  @Input() label = 'Action';
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';

}
