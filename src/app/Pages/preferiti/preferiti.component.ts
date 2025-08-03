import { Component } from '@angular/core';
import { FoodServicesService } from '../../Services/food-services.service';
import { RecipePreview } from '../../Interface/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent {

  preferiti$!: Observable<RecipePreview[]>;

    preferiti: RecipePreview[] = [];

    constructor(private foodService: FoodServicesService) {}

    ngOnInit(): void {
      this.foodService.PreferitiSub.asObservable().subscribe(data => {
        this.preferiti = data;
      });
    }

  removeFromPreferiti(id: number) {
    this.foodService.RemovePref(id);
  }
}
