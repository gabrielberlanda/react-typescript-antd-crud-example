import { ExportableFileType } from "./ExportableFileType";
import { ColumnProps } from "antd/lib/table";
import { ExportToCsv } from "export-to-csv";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const exportData = (listName: string = 'export_list', exportType: ExportableFileType, dataSource: any[], columns: ColumnProps<any>[]) => {
    let dataColumns = (columns || []).filter(c => c.dataIndex != null);
    
    let filename = listName.replace(' ', '_') + '_' + new Date().toString();

    const headers: string[] = dataColumns.map(c => c.title ? c.title.toString() : '');
    const data = (dataSource || []).map(e => {
      const dataArray = dataColumns.map(c => c.dataIndex ? String(e[c.dataIndex] || '') : ' ');
      return dataArray
    });

    switch (exportType) {
        case ExportableFileType.CSV:
            filename += '.csv';
            exportToCSV(filename, headers, data)
            break;
        case ExportableFileType.PDF:
            filename += '.pdf';
            exportToPDF(listName, filename, headers, data)
            break;
        default:
            break;
    }

}

const exportToCSV = (filename: string, headers: string[], data: string[][]) => {
    const options: any = { 
        fieldSeparator: ';',
        quoteStrings: null,
        decimalSeparator: '.',
        showLabels: true, 
        useTextFile: false,
        useBom: true,
        filename,
        headers
      };
  
      const csvExporter = new ExportToCsv(options);
      csvExporter.generateCsv(data);
}

const exportToPDF = (listName: string, filename: string, headers: string[], data: string[][]) => {
    data.splice(0, 0, headers);

    let docDefinition = {
        content: [
            { text: listName, style: 'header' },
            {
                table: {
                    body: data
                }
            }
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true,
                marginBottom: 10
            }
        }
    };

    pdfMake.createPdf(docDefinition).download(filename);
}