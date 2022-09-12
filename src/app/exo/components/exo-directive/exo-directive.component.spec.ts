import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoDirectiveComponent } from './exo-directive.component';

describe('ExoDirectiveComponent', () => {
  let component: ExoDirectiveComponent;
  let fixture: ComponentFixture<ExoDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
