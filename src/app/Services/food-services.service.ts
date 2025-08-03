import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe, RecipePreview, RecipeSearchResponse } from '../Interface/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServicesService {

  constructor(private http:HttpClient){}

  //Gestioni chiamate per ricette


  ComplexSearchUrl = 'https://api.spoonacular.com/recipes/complexSearch?includeIngredients='


  getRicette(ingredienti: string[],page: number = 1):Observable<RecipeSearchResponse>{

  const ingredientiFiltrati = ingredienti.filter(i => i && i.trim() !== '').join(',');

  const url = `${this.ComplexSearchUrl}?includeIngredients=${encodeURIComponent(ingredientiFiltrati)}&addRecipeInformation=true`;

  localStorage.setItem('ricerca-url', url);

  return this.http.get<RecipeSearchResponse>(url);

  }

  getRicetteByPage(page: number): Observable<RecipeSearchResponse> {
  const baseUrl = localStorage.getItem('ricerca-url');

  if (!baseUrl) {
    throw new Error('URL ricerca non disponibile. Fai prima una ricerca.');
  }

  const resultsPerPage = 10;
  const offset = (page - 1) * resultsPerPage;

  const paginatedUrl = `${baseUrl}&offset=${offset}`;

  return this.http.get<RecipeSearchResponse>(paginatedUrl);
}

  getWithMorefilter(){}



  getDettaglioRicetta(id: number): Observable<Recipe> {
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`;
  return this.http.get<Recipe>(url);
}



  //Gestioni preferiti
  PreferitiSub = new BehaviorSubject<RecipePreview[]>([])
  PreferitiSub$ = this.PreferitiSub.asObservable()

  //Aggiungi dai Preferiti
  AddPref(Recipe : RecipePreview ){

    const ChaId: number = Recipe.id

    const currentData = this.PreferitiSub.getValue()

    if (currentData.find(r => r.id === ChaId) ){
    }else{

      this.PreferitiSub.next([Recipe, ...currentData])
    }

  }

  //Togli dai  Preferiti
  RemovePref(id:number){

    const currentData = this.PreferitiSub.getValue()

    const newArray = currentData.filter(r => r.id !== id)

    this.PreferitiSub.next(newArray)

  }
}
