import { NgModule } from '@angular/core';
import { LibBsReportComponent } from './lib-bs-report.component';
import {LibBsReportToolbarModule} from "./modules/lib-bs-report-toolbar/lib-bs-report-toolbar.module";
import {LibBsReportSharedModule} from "./shared/lib-bs-report-shared.module";


@NgModule({
  declarations: [
    LibBsReportComponent
  ],
  imports: [
    LibBsReportToolbarModule,
    LibBsReportSharedModule
  ],
  exports: [
    LibBsReportComponent,
  ]
})
export class LibBsReportModule { }
