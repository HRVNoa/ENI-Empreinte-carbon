import {Component, Input} from '@angular/core';

export interface EcoColumn {
  label: string;   // Texte affiché
  field: string;   // Propriété de l’objet
  unit?: string;   // Optionnel (km, kg CO₂...)
}

@Component({
  selector: 'app-eco-table',
  standalone: true,
  imports: [],
  templateUrl: './eco-table.html',
  styleUrl: './eco-table.css',
})
export class EcoTable {
  @Input() columns: EcoColumn[] = [];
  @Input() rows: any[] = [];
}
