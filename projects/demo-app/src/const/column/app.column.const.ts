import {
  BsReportHeader,
  BsReportHeaderModel
} from "../../../../mik/lib-bs-report/src/lib/core/model/bs-report-header.model";


export const AppColumnConst: BsReportHeaderModel[] = BsReportHeader.init( [
  {
    display: 'Наименование',
    value: 'name'
  }, {
    display: 'Цена',
    value: 'price'
  }, {
    display: 'Категория',
    value: 'category'
  },{
    display: 'Количество',
    value: 'quantity'
  }, {
    display: 'Статус',
    value: 'status',
  }, {
    display: 'Отзывы',
    value: 'reviews'
  }
])
