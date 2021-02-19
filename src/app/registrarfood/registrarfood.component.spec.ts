import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarfoodComponent } from './registrarfood.component';

describe('RegistrarfoodComponent', () => {
  let component: RegistrarfoodComponent;
  let fixture: ComponentFixture<RegistrarfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
