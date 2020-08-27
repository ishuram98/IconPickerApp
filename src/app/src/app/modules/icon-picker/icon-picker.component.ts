import { Component, OnInit } from '@angular/core';
import { IconService } from './../icon.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl} from '@angular/forms';


@Component({
  selector: 'app-icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.css']
})
export class IconPickerComponent implements OnInit {


  public fixIcon: string;
  public IcofontSubcategory;
  public MaterialSubcategory;
  public name = '';
  public titleChosen = 'Icon Categories';
  hideAll = false;
  hideCategory = false;

  control = new FormControl();

  public IconPicker = {
    IcoFont: {
      WebApplication: {
        content: [
          'icofont-addons',
          'icofont-address-book',
          'icofont-alarm',
          'icofont-camera',
          'icofont-card',
          'icofont-cart',
          'icofont-chat',
          'icofont-data',
          'icofont-dashboard',
          'icofont-download',
          'icofont-brand-android-robot'],
        hidden: true,
        toggleIcon: false
      },
      Currency: {
        content: [
          'icofont-rupee',
          'icofont-dollar',
          'icofont-euro',
          'icofont-pound',
          'icofont-bitcoin',
          'icofont-yen',
          'icofont-baht',
          'icofont-afghani',
          'icofont-dong',
          'icofont-frank',
          'icofont-peso',
          'icofont-riyal'],
        hidden: true,
        toggleIcon: false
      },
      Payment: {
        content: [
          'icofont-amazon',
          'icofont-american-express',
          'icofont-apple-pay',
          'icofont-cash-on-delivery',
          'icofont-google-wallet-alt-3',
          'icofont-maestro',
          'icofont-mastercard',
          'icofont-paypal',
          'icofont-visa'],
        hidden: true,
        toggleIcon: false
      }
    },
    Material: {
      Action: {
        content: [
          'alarm',
          'analytics',
          'android',
          'api',
          'assessment',
          'code',
          'event',
          'delete',
          'done',
          'description',
          'explore',
          'info'],
        hidden: true,
        toggleIcon: false
      },
      Alert: {
        content: [
          'add_alert',
          'error',
          'warning',
          'auto_delete',
          'notification_important',
          'error_outline'
        ],
        hidden: true,
        toggleIcon: false
      },
      Maps: {
        content: [
          'add_location',
          'directions',
          'edit_location',
          'flight',
          'hotel',
          'local_mall',
          'local_pharmacy',
          'navigation',
          'restaurant',
          'traffic'
        ],
        hidden: true,
        toggleIcon: false
      }
    }
  };

  constructor(private dashboardService: IconService, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  toggleHidden(subdiv): void {
    console.log(subdiv.hidden);
    subdiv.hidden = !subdiv.hidden;
    console.log(subdiv.hidden);
    subdiv.toggleIcon = !subdiv.toggleIcon;
  }


  public changeIcon(newIcon: string): void {
    this.fixIcon = newIcon;
    this.dashboardService.sendIcon(this.fixIcon);
  }

  public displayAll(): void {
    this.titleChosen = 'All';
    this.hideAll = false;
    this.hideCategory = true;
  }

  public selectIcon(subCategory: string, category: string): void {

    this.titleChosen = category + '/' + subCategory;
    if (category === 'IcoFont') {
      this.MaterialSubcategory = ' ';
      this.IcofontSubcategory = subCategory;
      this.hideAll = true;
      this.hideCategory = false;
    }
    if (category === 'Material') {
      this.IcofontSubcategory = ' ';
      this.MaterialSubcategory = subCategory;
      this.hideAll = true;
      this.hideCategory = false;
    }

    console.log(subCategory);

  }


}
