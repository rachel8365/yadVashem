import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrancesOrdersComponentComponent } from './entrances-orders.component.component';

describe('EntrancesOrdersComponentComponent', () => {
  let component: EntrancesOrdersComponentComponent;
  let fixture: ComponentFixture<EntrancesOrdersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrancesOrdersComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrancesOrdersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
