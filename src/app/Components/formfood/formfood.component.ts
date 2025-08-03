import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formfood',
  templateUrl: './formfood.component.html',
  styleUrl: './formfood.component.scss'
})
export class FormfoodComponent {

  @Output() onCerca = new EventEmitter<string[]>();

  formVisible = true; // Mostrato inizialmente

  form = this.fb.group({
    ingredienti: this.fb.array([this.fb.control('')])
  });

  constructor(private fb: FormBuilder) {}




  get ingredienti(): FormArray {
    return this.form.get('ingredienti') as FormArray;
  }

  aggiungiIngrediente() {
    if (this.ingredienti.length < 6) {
      this.ingredienti.push(new FormControl(''));
    }
  }

  rimuoviIngrediente(index: number) {
    this.ingredienti.removeAt(index);
  }

  cerca() {
    const valoriPuliti = this.ingredienti.value.filter((i: string) => i && i.trim() !== '');
    this.onCerca.emit(valoriPuliti);

    // Trigger chiusura form dopo 300ms
    setTimeout(() => {
      this.formVisible = false;
    }, 300);
  }

}
