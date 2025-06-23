import {NgModule} from "@angular/core";
import {
  LibBsReportOptionsOffcanvasComponent
} from "./component/lib-bs-report-options-offcanvas/lib-bs-report-options-offcanvas.component";
import {DxDataGridModule, DxTabPanelModule} from "devextreme-angular";
import {ButtonModule} from "primeng/button";
import {TabViewModule} from "primeng/tabview";
import {TableModule} from "primeng/table";


@NgModule({
    imports: [
        DxTabPanelModule,
        DxDataGridModule,
        ButtonModule,
        TabViewModule,
        TableModule
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
