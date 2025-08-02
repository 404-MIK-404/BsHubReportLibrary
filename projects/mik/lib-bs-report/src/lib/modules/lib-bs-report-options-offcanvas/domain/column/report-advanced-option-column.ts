import {BsReportHeader, BsReportHeaderModel} from "../../../../core/model/bs-report-header.model";

export const reportAdvancedOptionColumn: BsReportHeaderModel[] = BsReportHeader.init([
  { value: 'name', display: 'Наименование опций' },
  { value: 'option', display: 'Опция'}

])

  /*
  [
  new BsReportHeader({ value: 'name', display: 'Наименование опций' }),
  new BsReportHeader({ value: 'option', display: 'Опция'}),
]

   */
