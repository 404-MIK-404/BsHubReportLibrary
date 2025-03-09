import {NgModule} from "@angular/core";
import {LibBsReportToolbarPresentationModule} from "./presentation/lib-bs-report-toolbar-presentation.module";
import {
  LibBsReportOptionsOffcanvasPresentationModule
} from "../lib-bs-report-options-offcanvas/presentation/lib-bs-report-options-offcanvas-presentation.module";

@NgModule({
  imports: [
    LibBsReportToolbarPresentationModule,
    LibBsReportOptionsOffcanvasPresentationModule
  ],
  declarations: [],
  exports: [
    LibBsReportToolbarPresentationModule,
    LibBsReportOptionsOffcanvasPresentationModule
  ],
  providers: []
})
export class LibBsReportToolbarModule {}
