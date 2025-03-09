import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {reportOptionColumn} from "../../../domain/column/report-option.column";
import {reportAdvancedOptionColumn} from "../../../domain/column/report-advanced-option-column";
import {NgbActiveOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import {BsReportConfigDataGridModel} from "../../../../../core/module/bs-report-config-data-grid.model";

@Component({
  selector: 'lib-bsreport-options-offcanvas',
  templateUrl: 'lib-bs-report-options-offcanvas.component.html',
  styleUrls: ['lib-bs-report-options-offcanvas.component.css']
})
export class LibBsReportOptionsOffcanvasComponent implements OnInit, OnDestroy {

  private events: Subscription = new Subscription()

  public selectedIndex: number = 0;

  public dataGridOptions: BsReportConfigDataGridModel[] = [
    {
      data: [],
      columns: reportOptionColumn,
    },
    {
      data: [],
      columns: reportAdvancedOptionColumn,
    },
  ]

  constructor(private activeOffcanvas: NgbActiveOffcanvas) {}

  public ngOnDestroy(): void {
    this.events.unsubscribe()
  }

  public ngOnInit(): void {
  }

  public onTabChangedOption(e: any) {
    this.selectedIndex = e.component.option('selectedIndex')
  }


  public onClickCloseOffcanvas(){
    this.activeOffcanvas.dismiss('');
  }



}
