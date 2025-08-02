import {Directive, OnDestroy, OnInit} from "@angular/core";
import {Table} from "primeng/table";
import {LibBsReportService} from "../../lib-bs-report.service";
import {Subscription} from "rxjs";
import {LibBsReportStorageService} from "../../core/service/lib-bs-report-storage.service";


@Directive({
  selector: '[lib-bs-report-table-directive]'
})
export class LibBsReportTableDirective implements OnInit, OnDestroy {

  private events: Subscription = new Subscription();

  constructor(private bsTableReport: Table,
              private libBsReportService: LibBsReportService,
              private libBsReportStorageService: LibBsReportStorageService) {
    this.events.add(this.libBsReportService.onLoadDataAndHeader$.subscribe(data=>{
      this.bsTableReport.value = data.data
      this.bsTableReport.globalFilterFields = Object.keys(data.data)
      this.libBsReportStorageService.setDataAndHeadersToStorage(data)
    }))
  }

  public ngOnDestroy(): void {
  }

  public ngOnInit(): void {}




}
