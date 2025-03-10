import {NgModule} from "@angular/core";
import {LibBsReportToolbarComponent} from "./component/lib-bs-report-toolbar/lib-bs-report-toolbar.component";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {DxSelectBoxModule, DxTabPanelModule} from "devextreme-angular";

@NgModule({
  imports: [
    DxTabPanelModule,
    ToolbarModule,
    ButtonModule,
    DxSelectBoxModule
  ],
  declarations: [
    LibBsReportToolbarComponent,
  ],
  exports: [
    LibBsReportToolbarComponent,
  ],
  providers: [],
})
export class LibBsReportToolbarPresentationModule {}
