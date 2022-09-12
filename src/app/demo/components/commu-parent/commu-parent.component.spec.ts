import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuParentComponent } from './commu-parent.component';

describe('CommuParentComponent', () => {
  let component: CommuParentComponent;
  let fixture: ComponentFixture<CommuParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
