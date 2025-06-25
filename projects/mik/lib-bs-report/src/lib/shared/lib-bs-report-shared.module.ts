import {NgModule} from "@angular/core";
import {LibBsReportTableDirective} from "./directive/lib-bs-report-table.directive";


@NgModule({
  declarations: [
    LibBsReportTableDirective,
  ],
  exports: [
    LibBsReportTableDirective,
  ],
})
export class LibBsReportSharedModule {}
