import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TableModule} from "primeng/table";
import {Subscription} from "rxjs";
import {LibBsReportModule} from "../../../mik/lib-bs-report/src/lib/lib-bs-report.module";
import {LibBsReportService} from "../../../mik/lib-bs-report/src/lib/lib-bs-report.service";
import {BsReportDataModel} from "../../../mik/lib-bs-report/src/lib/core/model/bs-report-data.model";
import {AppColumnConst} from "../const/column/app.column.const";
import {CommonModule} from "@angular/common";
import {LibBsReportSharedModule} from "../../../mik/lib-bs-report/src/lib/shared/lib-bs-report-shared.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TableModule,
    LibBsReportModule,
    LibBsReportSharedModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  private event: Subscription = new Subscription();

  public appModelTable: BsReportDataModel = {
      headers: AppColumnConst,
      data: [
        {
          name: 'Product A',
          price: 29.99,
          category: 'Electronics',
          quantity: '10',
          status: 'In Stock',
          reviews: 125,
        },
        {
          name: 'Product B',
          price: 49.50,
          category: 'Clothing',
          quantity: '25',
          status: 'Out of Stock',
          reviews: 87,
        },
        {
          name: 'Product C',
          price: 99.00,
          category: 'Home Appliances',
          quantity: '5',
          status: 'In Stock',
          reviews: 230,
        },
        {
          name: 'Product D',
          price: 15.75,
          category: 'Books',
          quantity: '50',
          status: 'Low Stock',
          reviews: 45,
        },
        {
          name: 'Product E',
          price: 199.99,
          category: 'Electronics',
          quantity: '8',
          status: 'In Stock',
          reviews: 320,
        },
      ]
  }

  constructor(private libBsReportService: LibBsReportService) {}


  public ngOnInit(): void  {
    this.event.add(this.libBsReportService.eventOnClickRefresh$.subscribe(()=>{
      console.log("Клик кнопки обновы !")
      this.libBsReportService.emitLoadDataAndHeader(this.appModelTable)
    }))
    this.event.add(this.libBsReportService.eventSelectDataReport$.subscribe(selectDateReport=>{
      console.log("Дата отчёта: ", selectDateReport)
    }))
    this.libBsReportService.emitLoadDataAndHeader(this.appModelTable)
  }

  public ngOnDestroy(): void {

  }

}
