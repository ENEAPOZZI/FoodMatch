import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSpiegazioneComponent } from './pop-up-spiegazione.component';

describe('PopUpSpiegazioneComponent', () => {
  let component: PopUpSpiegazioneComponent;
  let fixture: ComponentFixture<PopUpSpiegazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopUpSpiegazioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpSpiegazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
