import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCobroComponent } from './crear.component';

describe('CrearComponent', () => {
  let component: CrearCobroComponent;
  let fixture: ComponentFixture<CrearCobroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCobroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
