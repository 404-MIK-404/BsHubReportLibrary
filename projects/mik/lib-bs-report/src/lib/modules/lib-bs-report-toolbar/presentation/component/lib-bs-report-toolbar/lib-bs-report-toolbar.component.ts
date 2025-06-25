import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import {BsReportDateModel} from "../../../../../core/module/bs-report-date.model";
import {LibBsReportToolbarViewModel} from "../../viewmodel/lib-bs-report-toolbar.viewmodel";
import {LibBsReportService} from "../../../../../lib-bs-report.service";
import {
  LibBsReportOptionsOffcanvasComponent
} from "../../../../lib-bs-report-options-offcanvas/presentation/component/lib-bs-report-options-offcanvas/lib-bs-report-options-offcanvas.component";
import {MessageService} from "primeng/api";
import {BsReportDataModel} from "../../../../../core/module/bs-report-data.model";

@Component({
  selector: 'lib-bs-report-toolbar',
  templateUrl: 'lib-bs-report-toolbar.component.html',
  styleUrls: ['lib-bs-report-toolbar.component.css']
})
export class LibBsReportToolbarComponent implements OnInit, OnDestroy{

  public dateReports: BsReportDateModel[] = [
    {
      display: '1 сентября 2000 г.',
      date: '01-09-2000'
    },
    {
      display: '1 августа 2000 г.',
      date: '01-08-2000'
    },
    {
      display: '1 октября 2000 г.',
      date: '01-10-2000'
    },
    {
      display: '1 ноября 2000 г.',
      date: '01-11-2000'
    },
    {
      display: '1 декабря 2000 г.',
      date: '01-12-2000'
    }
  ];

  public dataTable: BsReportDataModel = {
    data: [],
    headers: []
  };

  private events: Subscription = new Subscription();

  constructor(private offcanvasService: NgbOffcanvas,
              private libBsReportToolbarViewModel: LibBsReportToolbarViewModel,
              private libBsReportService: LibBsReportService,
              private messageService: MessageService) {
    /*
    this.events.add(this.libBsReportService.onLoadDataAndHeader$.subscribe(table=>{
      this.dataTable = table
      console.log(table)
    }))

     */
  }

  public ngOnDestroy(): void {
    this.libBsReportService.destroy()
  }

  public ngOnInit(): void {
    this.events.add(this.libBsReportService.onLoadDataReports$.subscribe(reports=>{
      this.dateReports = reports
      console.log(reports)
    }))
    this.events.add(this.libBsReportService.onLoadOptions$.subscribe(options=>{
      console.log(options)
    }))
  }


  public onSelectionChangedDateReport(event: any): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedIndexValue = selectElement.selectedIndex;
    this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', key: 'tl', life: 3000 });
    this.libBsReportService.emitSelectDataReport(this.dateReports[selectedIndexValue])
  }

  public onClickRefresh(): void {
    this.libBsReportService.emitRefreshButton();
  }

  public onClickExportDataToExcel(): void {
    //this.libBsReportService.onClickConvertExcelButton$.next(undefined)
  }

  public onClickOffcanvasOptions(){
    this.offcanvasService.open(LibBsReportOptionsOffcanvasComponent, {
      position: 'start',
      backdrop: 'static',
    });
  }

}
