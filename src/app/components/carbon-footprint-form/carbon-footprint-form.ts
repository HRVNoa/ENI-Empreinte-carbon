import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EcoInput} from '../template/eco-input/eco-input';
import {EcoCard} from '../template/eco-card/eco-card';
import {EcoButton} from '../template/eco-button/eco-button';
import {CarbonFootprintCompute} from '../../services/carbon-footprint-compute';

@Component({
  selector: 'app-carbon-footprint-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    EcoInput,
    EcoCard,
    EcoButton
  ],
  templateUrl: './carbon-footprint-form.html',
  styleUrl: './carbon-footprint-form.css',
})
export class CarbonFootprintForm {

  public form: FormGroup;
  public distance :number;
  public consomation100 : number;
  public moyen : string;

  constructor(private carbonFootprintService :CarbonFootprintCompute) {
    this.distance = 0;
    this.consomation100 = 0;
    this.moyen = "voiture";
    this.form = new FormGroup({
      distance: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(9999999)]),
      consomation100: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(9999999)]),
      moyen: new FormControl("voiture", [Validators.required, Validators.pattern(/('Voiture'|'Train'|'Avion')/)]),
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      let moyen = this.form.value.moyen;
      moyen = moyen[0].toUpperCase() + moyen.slice(1);

      this.carbonFootprintService.addVoyages({ distanceKm: this.form.value.distance, consommationPour100Km: this.form.value.consomation100, moyen: moyen, quantiteCO2: 0 })
    }
  }
}
