import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoCommuComponent } from './exo-commu.component';

describe('ExoCommuComponent', () => {
  let component: ExoCommuComponent;
  let fixture: ComponentFixture<ExoCommuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoCommuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoCommuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
