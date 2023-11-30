import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEntranceComponent } from './my-entrance.component';

describe('MyEntranceComponent', () => {
  let component: MyEntranceComponent;
  let fixture: ComponentFixture<MyEntranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyEntranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
