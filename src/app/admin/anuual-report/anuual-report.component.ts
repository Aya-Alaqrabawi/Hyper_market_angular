import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserregisService } from 'src/app/service/userregis.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-anuual-report',
  templateUrl: './anuual-report.component.html',
  styleUrls: ['./anuual-report.component.css']
})
export class AnuualReportComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  constructor(public userRegisService: UserregisService) { }
  title = 'angular-app';
  fileName = 'ExcelSheet.xlsx';
  ngOnInit(): void {
    this.userRegisService.getAllAnuualReport();
    this.userRegisService.getAnuualSum();
    this.userRegisService.getAnuualCount();
  }
  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}
