import {Column} from "devextreme/ui/data_grid";

export const reportOptionColumn : Column[] = [
  {
    dataField: 'name',
    caption: 'Наименование',
    dataType: 'string',
    allowEditing: false,
  },
  {
    dataField: 'filter',
    caption: 'Поиск',
    allowEditing: true,
  },
  {
    dataField: 'isFixed',
    caption: 'Зафиксировать',
    dataType: 'boolean',
  },
  {
    dataField: 'isVisible',
    caption: 'Видимость',
    dataType: 'boolean'
  }
]
