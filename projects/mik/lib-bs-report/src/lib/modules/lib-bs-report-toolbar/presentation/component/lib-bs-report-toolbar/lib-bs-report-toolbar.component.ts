import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import {BsReportDateModel} from "../../../../../core/module/bs-report-date.model";
import {LibBsReportToolbarViewModel} from "../../viewmodel/lib-bs-report-toolbar.viewmodel";
import {LibBsReportService} from "../../../../../lib-bs-report.service";
import {
  LibBsReportOptionsOffcanvasComponent
} from "../../../../lib-bs-report-options-offcanvas/presentation/component/lib-bs-report-options-offcanvas/lib-bs-report-options-offcanvas.component";

@Component({
  selector: 'lib-bs-report-toolbar',
  templateUrl: 'lib-bs-report-toolbar.component.html',
  styleUrls: ['lib-bs-report-toolbar.component.html']
})
export class LibBsReportToolbarComponent implements OnInit, OnDestroy{

  public reportDates: BsReportDateModel[] = [
    {
      displayDate: '1 сентября 2000 г.',
      date: '01-09-2000'
    },
    {
      displayDate: '1 августа 2000 г.',
      date: '01-08-2000'
    }
  ]

  private events: Subscription = new Subscription();

  constructor(private offcanvasService: NgbOffcanvas,
              private libBsReportToolbarViewModel: LibBsReportToolbarViewModel,
              private libBsReportService: LibBsReportService) {
  }

  public ngOnDestroy(): void {
  }

  public ngOnInit(): void {
    this.events.add(this.libBsReportService.loadReportDates$.subscribe(reportDates=>{
      this.reportDates = reportDates
    }))
    this.events.add(this.libBsReportService.loadColumnReport$.subscribe(columns=>{
      this.libBsReportToolbarViewModel.loadColumnsOptionDataGrid$.next(columns)
    }))
  }

  public onSelectionChangedDateReport(event: any): void {
    this.libBsReportService.onLoadSelectReportDate(event.selectedItem)
  }

  public onClickRefresh(): void {
    this.libBsReportService.onClickRefreshButton$.next(undefined)
  }

  public onClickExportDataToExcel(): void {
    this.libBsReportService.onClickConvertExcelButton$.next(undefined)
  }

  public onClickOffcanvasOptions(){
    this.offcanvasService.open(LibBsReportOptionsOffcanvasComponent, {
      position: 'start',
      backdrop: 'static',
    });
  }

}
