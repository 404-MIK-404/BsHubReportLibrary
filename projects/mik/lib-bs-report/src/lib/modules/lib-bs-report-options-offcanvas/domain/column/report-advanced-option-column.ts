import {Column} from "devextreme/ui/data_grid";

export const reportAdvancedOptionColumn: Column[] = [
  {
    dataField: 'name',
    caption: 'Наименование опций',
    dataType: 'string',
    allowEditing: false,
  },
  {
    dataField: 'option',
    caption: 'Опция'
  }
]
