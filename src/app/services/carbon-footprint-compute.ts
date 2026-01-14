import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarbonFootprintCompute {

  public voyages : {distanceKm: number, consommationPour100Km: number, quantiteCO2: number}[];

  constructor() {
    this.voyages = [];
    this.voyages?.push({ distanceKm: 50, consommationPour100Km: 5, quantiteCO2 : (50 * 5) / 100 * 2.3 });
    this.voyages?.push({ distanceKm: 150, consommationPour100Km: 6, quantiteCO2 : (150 * 6) / 100 * 2.3 });
    this.voyages?.push({ distanceKm: 250, consommationPour100Km: 7, quantiteCO2 : (250 * 7) / 100 * 2.3 });
    this.voyages?.push({ distanceKm: 350, consommationPour100Km: 8, quantiteCO2 : (350 * 8) / 100 * 2.3 });
    this.voyages?.push({ distanceKm: 450, consommationPour100Km: 9, quantiteCO2 : (450 * 9) / 100 * 2.3 });
  }

  getVoyages(): {distanceKm: number, consommationPour100Km: number, quantiteCO2 : number}[] {
    return this.voyages;
  }

  addVoyages(voyage: {distanceKm: number, consommationPour100Km: number, quantiteCO2: number }) {
    voyage.quantiteCO2 = Number(((voyage.distanceKm * voyage.consommationPour100Km) / 100 * 2.3).toFixed(2));
    this.voyages.push(voyage);
  }

  getResumeVoyages() : {distanceTotal: number, consoMoyenne: number, quantiteCO2Total : number}{
    let distanceTotale = 0;
    let consoMoyenne = 0;
    let quantiteCO2Totale = 0;
    for (const voyage of this.getVoyages()) {
      distanceTotale += voyage.distanceKm;
      consoMoyenne += voyage.consommationPour100Km;
      quantiteCO2Totale += voyage.quantiteCO2;
    }
    distanceTotale = Number((distanceTotale/this.getVoyages().length).toFixed(2));
    consoMoyenne = Number((consoMoyenne/this.getVoyages().length).toFixed(2));
    return {distanceTotal: distanceTotale, consoMoyenne: consoMoyenne, quantiteCO2Total : quantiteCO2Totale};
  }

}
