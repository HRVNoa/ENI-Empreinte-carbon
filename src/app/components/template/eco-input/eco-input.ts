import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-eco-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './eco-input.html',
  styleUrl: './eco-input.css',
})
export class EcoInput {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() ngmodel = '';
}
