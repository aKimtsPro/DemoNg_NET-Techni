import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoContainerComponent } from './exo-container.component';

describe('ExoContainerComponent', () => {
  let component: ExoContainerComponent;
  let fixture: ComponentFixture<ExoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
