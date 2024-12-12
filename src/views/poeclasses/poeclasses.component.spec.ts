import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoeclassesComponent } from './poeclasses.component';

describe('PoeclassesComponent', () => {
  let component: PoeclassesComponent;
  let fixture: ComponentFixture<PoeclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoeclassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoeclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
