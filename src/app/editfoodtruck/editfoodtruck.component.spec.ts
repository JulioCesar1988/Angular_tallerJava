import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfoodtruckComponent } from './editfoodtruck.component';

describe('EditfoodtruckComponent', () => {
  let component: EditfoodtruckComponent;
  let fixture: ComponentFixture<EditfoodtruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfoodtruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfoodtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
