import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesOfCardsComponent } from './times-of-cards.component';

describe('TimesOfCardsComponent', () => {
  let component: TimesOfCardsComponent;
  let fixture: ComponentFixture<TimesOfCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimesOfCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimesOfCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
