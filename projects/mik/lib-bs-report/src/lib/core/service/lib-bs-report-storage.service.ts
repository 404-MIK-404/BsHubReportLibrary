import {Injectable} from "@angular/core";
import {BsReportDataModel} from "../model/bs-report-data.model";


@Injectable({
  providedIn: 'root'
})
export class LibBsReportStorageService {

  private static  BS_REPORT_STORAGE_DATA_HEADERS: string = "BS_REPORT_STORAGE_DATA_HEADERS"

  constructor() {}

  public setDataAndHeadersToStorage(data: BsReportDataModel): void {
      sessionStorage.setItem(LibBsReportStorageService.BS_REPORT_STORAGE_DATA_HEADERS,JSON.stringify(data))
  }


  public getDataAndHeadersToStorage(): BsReportDataModel | null {
    const item = sessionStorage.getItem(LibBsReportStorageService.BS_REPORT_STORAGE_DATA_HEADERS);
    return item !== null ? JSON.parse(item) as BsReportDataModel : null;
  }

}
