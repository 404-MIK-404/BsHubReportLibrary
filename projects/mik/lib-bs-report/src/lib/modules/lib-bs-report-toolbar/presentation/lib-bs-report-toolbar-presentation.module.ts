import {NgModule} from "@angular/core";
import {LibBsReportToolbarComponent} from "./component/lib-bs-report-toolbar/lib-bs-report-toolbar.component";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {DxSelectBoxModule, DxTabPanelModule} from "devextreme-angular";
import {DropdownModule} from "primeng/dropdown";
import {CommonModule} from "@angular/common";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@NgModule({
  imports: [
    DxTabPanelModule,
    ToolbarModule,
    ButtonModule,
    DxSelectBoxModule,

    DropdownModule,
    CommonModule,
    ToastModule
  ],
  declarations: [
    LibBsReportToolbarComponent,
  ],
  exports: [
    LibBsReportToolbarComponent,
  ],
  providers: [
    MessageService,
  ],
})
export class LibBsReportToolbarPresentationModule {}
