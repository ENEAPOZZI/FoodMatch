import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodServicesService } from '../../Services/food-services.service';
import { Recipe } from '../../Interface/interfaces';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrl: './dettaglio.component.scss'
})
export class DettaglioComponent{

  recipeDetail!: Recipe ;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodServicesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.foodService.getDettaglioRicetta(id).subscribe({
      next: detail => {
        this.recipeDetail = detail;
        this.isLoading = false;
      },
      error: err => {
        console.error('Errore nel caricamento dettaglio:', err);
        this.isLoading = false;
      }
    });
  }

}
