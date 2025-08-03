import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinpCardComponent } from './prinp-card.component';

describe('PrinpCardComponent', () => {
  let component: PrinpCardComponent;
  let fixture: ComponentFixture<PrinpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrinpCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrinpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
