import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {BsReportDateModel} from "./core/model/bs-report-date.model";
import {BsReportDataModel} from "./core/model/bs-report-data.model";
@Injectable({
  providedIn: 'root'
})
export class LibBsReportService {

  private onLoadOptionsSubject = new Subject<any>();

  public readonly onLoadOptions$: Observable<any> = this.onLoadOptionsSubject.asObservable();

  private onLoadDataReportsSubject: Subject<BsReportDateModel[]> = new Subject<BsReportDateModel[]>()

  public readonly onLoadDataReports$: Observable<BsReportDateModel[]> = this.onLoadDataReportsSubject.asObservable();

  private eventOnClickRefreshSubject: Subject<void> = new Subject<void>()

  public readonly eventOnClickRefresh$: Observable<void> = this.eventOnClickRefreshSubject.asObservable();

  private eventSelectDataReportSubject: Subject<BsReportDateModel> = new Subject<BsReportDateModel>();

  public readonly eventSelectDataReport$: Observable<BsReportDateModel> = this.eventSelectDataReportSubject.asObservable();

  private onLoadDataAndHeadersSubject: Subject<BsReportDataModel> = new Subject<BsReportDataModel>();

  public readonly onLoadDataAndHeader$: Observable<BsReportDataModel> = this.onLoadDataAndHeadersSubject.asObservable();

  constructor() {}

  public emitLoadOptions(options: any): void {
    this.onLoadOptionsSubject.next(options);
  }

  public emitLoadDataReports(reports: BsReportDateModel[]): void {
    this.onLoadDataReportsSubject.next(reports);
  }

  public emitLoadDataAndHeader(data: BsReportDataModel): void {
    this.onLoadDataAndHeadersSubject.next(data)
  }

  public emitRefreshButton(): void {
    this.eventOnClickRefreshSubject.next();
  }

  public emitSelectDataReport(report: BsReportDateModel): void {
    this.eventSelectDataReportSubject.next(report);
  }

  public destroy(): void {
    this.onLoadOptionsSubject.complete();
    this.onLoadDataReportsSubject.complete();
    this.eventOnClickRefreshSubject.complete();
    this.eventSelectDataReportSubject.complete();
    this.onLoadDataAndHeadersSubject.complete();
  }

}
