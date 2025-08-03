import { Component } from '@angular/core';
import { RecipePreview } from '../../Interface/interfaces';
import { FoodServicesService } from '../../Services/food-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ricette: RecipePreview[] = [];
  tutteLeRicette: RecipePreview[] = [];
  filtroAttivo: string | null = null;

  totalResults: number = 0;
  resultsPerPage: number = 10;
  currentPage: number = 1;

  //Per i messaggi
  hasSearched: boolean = false;
  isError: boolean = false;
  isNoResults: boolean = false;

  formVisible = true;

  riapriForm() {
    this.formVisible = true;
  }

  constructor(private ricettaService: FoodServicesService) {}


  ngOnInit() {
  if (!this.hasSearched) {
    const ingrRaw = localStorage.getItem('lastIngredients');
    const pageRaw = localStorage.getItem('lastPage');

    if (ingrRaw && pageRaw) {
      const ingredienti = JSON.parse(ingrRaw);
      const page = parseInt(pageRaw, 10);

      this.cercaRicette(ingredienti);
      this.currentPage = page;
    }
  }
}


cercaRicette(ingredienti: string[]) {
  this.currentPage = 1;
  this.formVisible = false;

  this.ricettaService.getRicette(ingredienti, this.currentPage).subscribe({
    next: response => {
      this.hasSearched = true;
      this.isError = false;

      if (response.totalResults === 0) {
        this.isNoResults = true;
        this.ricette = [];
        this.totalResults = 0;
        this.tutteLeRicette = [];
      } else {
        this.isNoResults = false;
        this.tutteLeRicette = response.results;
        this.totalResults = response.totalResults;

        // Applica eventualmente un filtro attivo
        if (this.filtroAttivo) {
          this.ricette = this.tutteLeRicette.filter(r => r[this.filtroAttivo as keyof RecipePreview] === true);
        } else {
          this.ricette = [...this.tutteLeRicette];
        }

        // Salva ingredienti e pagina
        localStorage.setItem('lastIngredients', JSON.stringify(ingredienti));
        localStorage.setItem('lastPage', this.currentPage.toString());
      }
    },
    error: err => {
      console.error('Errore nella chiamata:', err);
      this.isError = true;
      this.isNoResults = false;
      this.ricette = [];
      this.totalResults = 0;
      this.tutteLeRicette = [];
      this.hasSearched = true;
    }
  });
}

paginaSelezionata(page: number) {
  this.currentPage = page;

  this.ricettaService.getRicetteByPage(page).subscribe(response => {
    this.ricette = response.results;
    this.totalResults = response.totalResults;

    localStorage.setItem('lastPage', this.currentPage.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}



applicaFiltroDiet(filtro: string | null) {
  this.filtroAttivo = filtro;

  if (!filtro) {
    this.ricette = [...this.tutteLeRicette];
  } else {
    this.ricette = this.tutteLeRicette.filter(r => r[filtro as keyof RecipePreview] === true);
  }
}




}
