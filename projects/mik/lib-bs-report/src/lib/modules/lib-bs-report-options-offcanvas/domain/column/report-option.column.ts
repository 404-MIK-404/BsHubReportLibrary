import {BsReportHeader, BsReportHeaderModel} from "../../../../core/model/bs-report-header.model";

export const reportOptionColumn : BsReportHeaderModel[] = BsReportHeader.init([
  {
    value: 'name',
    display: 'Наименование',
  },
  {
    value: 'filter',
    display: 'Поиск по значению',
    type: "string",
    editable: true,
  }, {
    value: 'isFixed',
    display: 'Зафиксировать',
    type: "boolean",
    editable: true
  }, {
    value: 'isVisible',
    display: 'Видимость',
    type: "boolean",
    editable: true,
  }
])
