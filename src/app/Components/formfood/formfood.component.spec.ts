import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfoodComponent } from './formfood.component';

describe('FormfoodComponent', () => {
  let component: FormfoodComponent;
  let fixture: ComponentFixture<FormfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormfoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
