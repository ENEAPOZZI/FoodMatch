import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent {

  selected: string | null = null;

  @Output() filtroCambiato = new EventEmitter<string | null>();

  selezionaFiltro(filtro: string) {
    if (this.selected === filtro) {
      this.selected = null;
      this.filtroCambiato.emit(null);
    } else {
      this.selected = filtro;
      this.filtroCambiato.emit(filtro);
    }
  }

  isDisabled(filtro: string): boolean {
    return this.selected !== null && this.selected !== filtro;
  }
}
