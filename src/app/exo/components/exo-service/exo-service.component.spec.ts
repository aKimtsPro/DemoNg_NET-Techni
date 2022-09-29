import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoServiceComponent } from './exo-service.component';

describe('ExoServiceComponent', () => {
  let component: ExoServiceComponent;
  let fixture: ComponentFixture<ExoServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
