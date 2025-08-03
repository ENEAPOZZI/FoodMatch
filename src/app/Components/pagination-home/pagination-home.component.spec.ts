import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationHomeComponent } from './pagination-home.component';

describe('PaginationHomeComponent', () => {
  let component: PaginationHomeComponent;
  let fixture: ComponentFixture<PaginationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
