import { NgModule } from '@angular/core';
import { LibBsReportComponent } from './lib-bs-report.component';
import {LibBsReportToolbarModule} from "./modules/lib-bs-report-toolbar/lib-bs-report-toolbar.module";



@NgModule({
  declarations: [
    LibBsReportComponent
  ],
  imports: [
    LibBsReportToolbarModule
  ],
  exports: [
    LibBsReportComponent
  ]
})
export class LibBsReportModule { }
