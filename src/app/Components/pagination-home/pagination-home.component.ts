import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-home',
  templateUrl: './pagination-home.component.html',
  styleUrl: './pagination-home.component.scss'
})
export class PaginationHomeComponent {

  @Input() totalResults: number = 0;
  @Input() currentPage: number = 1;
  @Output() pageChanged = new EventEmitter<number>();

  readonly resultsPerPage: number = 10;

  get totalPages(): number {
    return Math.ceil(this.totalResults / this.resultsPerPage);
  }

  cambiaPagina(page: number) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.pageChanged.emit(page);
    }
  }

}
