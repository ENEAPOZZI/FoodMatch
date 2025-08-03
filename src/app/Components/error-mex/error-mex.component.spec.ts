import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMexComponent } from './error-mex.component';

describe('ErrorMexComponent', () => {
  let component: ErrorMexComponent;
  let fixture: ComponentFixture<ErrorMexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorMexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorMexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
