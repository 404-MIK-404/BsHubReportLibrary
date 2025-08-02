import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {NgbActiveOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import {BsReportDataModel} from "../../../../../core/model/bs-report-data.model";
import {LibBsReportStorageService} from "../../../../../core/service/lib-bs-report-storage.service";
import {reportAdvancedOptionColumn} from "../../../domain/column/report-advanced-option-column";
import {reportOptionColumn} from "../../../domain/column/report-option.column";

@Component({
  selector: 'lib-bsreport-options-offcanvas',
  templateUrl: 'lib-bs-report-options-offcanvas.component.html',
  styleUrls: ['lib-bs-report-options-offcanvas.component.css']
})
export class LibBsReportOptionsOffcanvasComponent implements OnInit, OnDestroy {

  private events: Subscription = new Subscription()

  public selectedIndex: number = 0;

  public dataTableOptions: BsReportDataModel[] = [{
      data: [],
      headers: reportAdvancedOptionColumn
    }, {
      data: [],
      headers: reportOptionColumn
    }
  ]

  constructor(private activeOffcanvas: NgbActiveOffcanvas,
              private libBsReportStorageService: LibBsReportStorageService) {}

  public ngOnDestroy(): void {
    this.events.unsubscribe()
  }

  public ngOnInit(): void {
    let datas = this.libBsReportStorageService.getDataAndHeadersToStorage();
    this.dataTableOptions[1].data = datas?.headers.map(value => {
      console.log(value)
      return {name: value.display, filter: undefined, isFixed: value.fixed, isVisible: value.visible,isEditable: value.editable}
    }) ?? []
  }

  public onTabChangedOption(e: any) {
    this.selectedIndex = e.component.option('selectedIndex')
  }


  public onClickCloseOffcanvas(){
    this.activeOffcanvas.dismiss('');
  }

   public test(tdf: any): string {
      console.log(Object.keys(tdf))
     return 'testing';
   }


}
