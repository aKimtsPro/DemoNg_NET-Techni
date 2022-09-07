import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoExportComponent } from './components/demo-export/demo-export.component';


@NgModule({
  declarations: [
    DemoExportComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DemoExportComponent
  ]
})
export class SharedModule { }
