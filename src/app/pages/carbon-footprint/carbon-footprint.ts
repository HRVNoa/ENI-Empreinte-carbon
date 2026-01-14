import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {CarbonFootprintForm} from '../../components/carbon-footprint-form/carbon-footprint-form';
import {CarbonFootprintResult} from '../../components/carbon-footprint-result/carbon-footprint-result';
import {NgClass, NgStyle} from '@angular/common';
import {EcoButton} from '../../components/template/eco-button/eco-button';
import {EcoCarbonIndicator} from '../../components/template/eco-carbon-indicator/eco-carbon-indicator';
import {EcoCard} from '../../components/template/eco-card/eco-card';
import {EcoDivider} from '../../components/template/eco-divider/eco-divider';
import {CarbonFootprintCompute} from '../../services/carbon-footprint-compute';
import {EcoAlert} from '../../components/template/eco-alert/eco-alert';
import {EcoColumn, EcoTable} from '../../components/template/eco-table/eco-table';

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [
    CarbonFootprintForm,
    CarbonFootprintResult,
    NgStyle,
    NgClass,
    EcoButton,
    EcoCarbonIndicator,
    EcoCard,
    EcoDivider,
    EcoAlert,
    EcoTable,
  ],
  templateUrl: './carbon-footprint.html',
  styleUrl: './carbon-footprint.css',
})
export class CarbonFootprint implements OnInit, AfterViewInit , OnDestroy{

  public MAX_CONSO = 7;
  public MIN_CONSO = 4;

  public distanceKm? : number;
  public consommationPour100Km? : number;
  public consommationTotal? : number;

  voyages: {distanceKm: number, consommationPour100Km: number, quantiteCO2 :number}[] = [
    // { distanceKm: 120, consommationPour100Km: 6.5, quantiteCO2: 18 },
    // { distanceKm: 80, consommationPour100Km: 5.2, quantiteCO2: 10 }
  ];

  columns: EcoColumn[] = [
    { label: 'Distance', field: 'distanceKm', unit: 'km' },
    { label: 'Consommation', field: 'consommationPour100Km', unit: 'L/100km' },
    { label: 'Moyen de transport', field: 'moyen' },
    { label: 'CO₂ émis', field: 'quantiteCO2', unit: 'kg' }
  ];

  constructor(private carbonFootprintComputeService : CarbonFootprintCompute) {

  }

  ngOnInit(): void {
    this.distanceKm = 200;
    this.consommationPour100Km = 2;
    this.calcul();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  calcul() {
    this.consommationTotal = Number(((this.distanceKm!/100) * this.consommationPour100Km!).toFixed(2));
  }

  add100() {
    this.distanceKm! += 100;
    this.calcul();
  }

  getVoyages() : {distanceKm: number, consommationPour100Km: number, quantiteCO2 :number}[]{
    return this.carbonFootprintComputeService.getVoyages();
  }

  // addVoyage(){
  //   const distance = Math.floor(Math.random() * 1000);
  //   const consommation = Math.floor(Math.random() * 10);
  //   const quantiteCO2 = 0;
  //
  //   this.carbonFootprintComputeService.addVoyages({distanceKm: distance, consommationPour100Km: consommation, quantiteCO2 : quantiteCO2})
  //   this.voyages.push({distanceKm: distance, consommationPour100Km: consommation, quantiteCO2 : Number(((distance * consommation) / 100 * 2.3).toFixed(2))})
  //   this.calculeFromVoyages();
  // }

  private calculeFromVoyages() : void {
    const resumeVoyages = this.carbonFootprintComputeService.getResumeVoyages();

    this.distanceKm = resumeVoyages.distanceTotal;
    this.consommationPour100Km = resumeVoyages.consoMoyenne;
    this.calcul();
  }
}
