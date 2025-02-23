import {NgModule} from "@angular/core";
import {
  LibBsReportOptionsOffcanvasComponent
} from "./component/component/lib-bs-report-options-offcanvas/lib-bs-report-options-offcanvas.component";
import {DxDataGridModule, DxTabPanelModule} from "devextreme-angular";
import {ButtonModule} from "primeng/button";


@NgModule({
  imports: [
    DxTabPanelModule,
    DxDataGridModule,
    ButtonModule
  ],
  declarations: [
    LibBsReportOptionsOffcanvasComponent
  ],
  exports: [
    LibBsReportOptionsOffcanvasComponent
  ],
  providers: [],
})
export class LibBsReportOptionsOffcanvasPresentationModule {}
