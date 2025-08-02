
export interface BsReportHeaderModel  {

  value: string,
  display: string,
  visible?: boolean,
  fixed?: boolean,
  type?: "boolean" | "number" | "string" | "list",
  dataList?: any[],
  keyExprDataList?: string
  editable?: boolean,

}


export class BsReportHeader implements BsReportHeaderModel {

  constructor(  public value: string,
                public display: string,
                public visible?: boolean,
                public fixed?: boolean,
                public type?: "boolean" | "number" | "string" | "list",
                public dataList?: any[],
                public keyExprDataList?: string,
                public editable?: boolean) {
  }


  public static init(columns: BsReportHeaderModel[]): BsReportHeaderModel[] {
    return columns.map(column=>{
      return {
        value: column.value,
        display: column.display,
        fixed: column.fixed ?? false,
        visible: column.visible ?? true,
        type: column.type ?? "string",
        editable: column.editable ?? false,
        dataList: column.dataList ?? [],
        keyExprDataList: column.keyExprDataList ?? "",
      }
    });
  }


}
