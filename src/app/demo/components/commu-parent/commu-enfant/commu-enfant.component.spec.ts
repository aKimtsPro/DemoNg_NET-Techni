import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuEnfantComponent } from './commu-enfant.component';

describe('CommuEnfantComponent', () => {
  let component: CommuEnfantComponent;
  let fixture: ComponentFixture<CommuEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
