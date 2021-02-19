import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdictusuarioComponent } from './edictusuario.component';

describe('EdictusuarioComponent', () => {
  let component: EdictusuarioComponent;
  let fixture: ComponentFixture<EdictusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdictusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdictusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
