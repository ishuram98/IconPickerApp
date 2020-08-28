import { IconPickerComponent } from './../icon-picker/icon-picker.component';
import { IconService } from './../icon.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public iconName;
  public className;
  public dialogRef;

  constructor(private dashboardService: IconService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dashboardService.resultI$.subscribe(
      (icon) => {
        this.dialogRef.close();
        if (icon.search('icofont') === -1) {
          console.log(this.iconName);
          this.iconName = icon;
          this.className = icon;
        }
        else {
          this.iconName = '';
          this.className = icon;
        }
      });
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(IconPickerComponent, {
      width: '700px', height: '400px'
    });
  }

}
