import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoPipeComponent } from './exo-pipe.component';

describe('ExoPipeComponent', () => {
  let component: ExoPipeComponent;
  let fixture: ComponentFixture<ExoPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
