import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoExportComponent } from './demo-export.component';

describe('DemoExportComponent', () => {
  let component: DemoExportComponent;
  let fixture: ComponentFixture<DemoExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
