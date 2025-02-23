import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {BsReportDateModel} from "./core/module/bs-report-date.model";
import DevExpress from "devextreme";

@Injectable({
  providedIn: 'root'
})
export class LibBsReportService {


  public onClickConvertExcelButton$: Subject<void> = new Subject<void>();

  public onClickRefreshButton$: Subject<void> = new Subject<void>();

  public loadColumnReport$: Subject<DevExpress.ui.dxDataGrid.Column> = new Subject<any>()

  public loadReportDates$: Subject<BsReportDateModel[]> = new Subject<BsReportDateModel[]>()

  public onChangedSelectionReportDate$: Subject<BsReportDateModel> = new Subject<BsReportDateModel>()

  constructor() {}


  public onLoadColumnReport(columns: DevExpress.ui.dxDataGrid.Column): void {
    this.loadColumnReport$.next(columns)
  }

  public onLoadDateReport(reportDates: BsReportDateModel[]): void{
    this.loadReportDates$.next(reportDates)
  }

  public onLoadSelectReportDate(reportDate: BsReportDateModel) : void {
    this.onChangedSelectionReportDate$.next(reportDate)
  }

}
