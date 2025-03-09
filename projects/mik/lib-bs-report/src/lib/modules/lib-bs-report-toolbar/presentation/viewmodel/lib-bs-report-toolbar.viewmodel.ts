import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import DevExpress from "devextreme";


@Injectable({
  providedIn: 'root'
})
export class LibBsReportToolbarViewModel {

  public loadColumnsOptionDataGrid$: Subject<DevExpress.ui.dxDataGrid.Column[]> = new Subject()

  constructor() {}


}
