import {NgModule} from "@angular/core";
import {
  LibBsReportOptionsOffcanvasComponent
} from "./component/lib-bs-report-options-offcanvas/lib-bs-report-options-offcanvas.component";
import {DxDataGridModule, DxTabPanelModule} from "devextreme-angular";
import {ButtonModule} from "primeng/button";
import {TabViewModule} from "primeng/tabview";
import {TableModule} from "primeng/table";
import {CommonModule} from "@angular/common";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {AutoCompleteModule} from "primeng/autocomplete";


@NgModule({
  imports: [
    DxTabPanelModule,
    DxDataGridModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    CommonModule,
    CheckboxModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    AutoCompleteModule,
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
