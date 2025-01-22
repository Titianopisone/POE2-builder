import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutogemmesComponent } from './tutogemmes.component';

describe('TutogemmesComponent', () => {
  let component: TutogemmesComponent;
  let fixture: ComponentFixture<TutogemmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutogemmesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutogemmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
