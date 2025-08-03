import { Component, Input } from '@angular/core';
import { RecipePreview } from '../../Interface/interfaces';
import { FoodServicesService } from '../../Services/food-services.service';

@Component({
  selector: 'app-prinp-card',
  templateUrl: './prinp-card.component.html',
  styleUrl: './prinp-card.component.scss'
})
export class PrinpCardComponent {

  @Input() recipe!: RecipePreview;

  constructor(private foodService: FoodServicesService) {}


  togglePreferito() {
    const isPresente = this.isInPreferiti();

    if (isPresente) {
      this.foodService.RemovePref(this.recipe.id);
    } else {
      this.foodService.AddPref(this.recipe);
    }
  }


  isInPreferiti(): boolean {
    const current = this.foodService.PreferitiSub.getValue();
    return current.some(r => r.id === this.recipe.id);
  }

}
