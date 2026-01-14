import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-eco-progress',
  standalone: true,
  imports: [],
  templateUrl: './eco-progress.html',
  styleUrl: './eco-progress.css',
})
export class EcoProgress {
  @Input() value = 0;
}
