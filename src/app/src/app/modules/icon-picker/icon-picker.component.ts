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
  hideAll = true;
  hideCategory = true;
  public term = '';
  public termLength = this.term.length;

  control = new FormControl();

  public IconPicker = {
    IcoFont: {
      WebApplication: {
        content: [
          'icofont-addons',
          'icofont-address-book',
          'icofont-alarm',
          'icofont-at',
          'icofont-attachment',
          'icofont-audio',
          'icofont-badge',
          'icofont-bar-code',
          'icofont-bluetooth',
          'icofont-calendar',
          'icofont-camera-alt',
          'icofont-camera',
          'icofont-card',
          'icofont-cart',
          'icofont-chat',
          'icofont-copyright',
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
          'icofont-riyal',
          'icofont-afghani',
          'icofont-hryvnia',
          'icofont-lira',
          'icofont-peseta',
          'icofont-renminbi',
          'icofont-rouble',
          'icofont-taka',
          'icofont-won'],
        hidden: true,
        toggleIcon: false
      },
      Payment: {
        content: [
          'icofont-amazon',
          'icofont-amazon-alt',
          'icofont-american-express',
          'icofont-american-express-alt',
          'icofont-apple-pay',
          'icofont-apple-pay-alt',
          'icofont-cash-on-delivery',
          'icofont-cash-on-delivery-alt',
          'icofont-google-wallet-alt-2',
          'icofont-google-wallet-alt-3',
          'icofont-jcb',
          'icofont-jcb-alt',
          'icofont-maestro',
          'icofont-maestro-alt',
          'icofont-mastercard',
          'icofont-mastercard-alt',
          'icofont-paypal',
          'icofont-paypal-alt',
          'icofont-visa',
          'icofont-visa-alt'
        ],
        hidden: true,
        toggleIcon: false
      },
      Business: {
        content: [
          'icofont-bank',
          'icofont-barcode',
          'icofont-bill-alt',
          'icofont-billboard',
          'icofont-briefcase-1',
          'icofont-briefcase-2',
          'icofont-businessman',
          'icofont-businesswoman',
          'icofont-chair',
          'icofont-coins',
          'icofont-contact-add',
          'icofont-files-stack',
          'icofont-handshake-deal',
          'icofont-id-card',
          'icofont-meeting-add',
          'icofont-pie-chart',
          'icofont-presentation-alt',
          'icofont-presentation',
          'icofont-stamp',
          'icofont-stock-mobile',
        ],
        hidden: true,
        toggleIcon: false
      },
      Medical: {
        content: [
          'icofont-ambulance-cross',
          'icofont-ambulance',
          'icofont-blood-drop',
          'icofont-blood-test',
          'icofont-brain-alt',
          'icofont-brain',
          'icofont-capsule',
          'icofont-crutch',
          'icofont-disabled',
          'icofont-dna',
          'icofont-doctor-alt',
          'icofont-doctor',
          'icofont-drug',
          'icofont-first-aid-alt',
          'icofont-first-aid',
          'icofont-heart-beat-alt',
          'icofont-heart-beat',
          'icofont-heartbeat',
          'icofont-hospital',
          'icofont-icu',
        ],
        hidden: true,
        toggleIcon: false
      },
      Directional: {
        content: [
          'icofont-arrow-down',
          'icofont-arrow-left',
          'icofont-arrow-right',
          'icofont-arrow-up',
          'icofont-block-down',
          'icofont-block-left',
          'icofont-block-right',
          'icofont-block-up',
          'icofont-caret-down',
          'icofont-caret-left',
          'icofont-caret-right',
          'icofont-caret-up',
          'icofont-circled-down',
          'icofont-circled-left',
          'icofont-circled-right',
          'icofont-circled-up',
          'icofont-dotted-down',
          'icofont-dotted-left',
          'icofont-dotted-right',
          'icofont-dotted-up',
        ],
        hidden: true,
        toggleIcon: false
      },
      Social: {
        content: [
          'icofont-dropbox',
          'icofont-facebook-messenger',
          'icofont-facebook',
          'icofont-flikr',
          'icofont-github',
          'icofont-gnome',
          'icofont-google-hangouts',
          'icofont-google-map',
          'icofont-google-plus',
          'icofont-instagram',
          'icofont-linkedin',
          'icofont-picasa',
          'icofont-pinterest',
          'icofont-reddit',
          'icofont-skype',
          'icofont-slack',
          'icofont-spotify',
          'icofont-youtube',
          'icofont-twitter',
          'icofont-whatsap',
        ],
        hidden: true,
        toggleIcon: false
      },
      Weather: {
        content: [
          'icofont-celsius',
          'icofont-clouds',
          'icofont-cloudy',
          'icofont-fahrenheit',
          'icofont-hail',
          'icofont-hurricane',
          'icofont-night',
          'icofont-rainy-night',
          'icofont-rainy-sunny',
          'icofont-rainy-thunder',
          'icofont-rainy',
          'icofont-snow-alt',
          'icofont-snow-flake',
          'icofont-snow',
          'icofont-sun-alt',
          'icofont-sun-rise',
          'icofont-sun-set',
          'icofont-sun',
          'icofont-sunny',
          'icofont-thunder-light',
        ],
        hidden: true,
        toggleIcon: false
      },
      FileType: {
        content: [
          'icofont-file-alt',
          'icofont-file-audio',
          'icofont-file-css',
          'icofont-file-document',
          'icofont-file-excel',
          'icofont-file-file',
          'icofont-file-gif',
          'icofont-file-html5',
          'icofont-file-image',
          'icofont-file-java',
          'icofont-file-javascript',
          'icofont-file-jpg',
          'icofont-file-mp3',
          'icofont-file-pdf',
          'icofont-file-powerpoint',
          'icofont-file-presentation',
          'icofont-file-python',
          'icofont-file-spreadsheet',
          'icofont-file-sql',
          'icofont-file-text',
        ],
        hidden: true,
        toggleIcon: false
      },
      TextEditor: {
        content: [
          'icofont-align-center',
          'icofont-align-left',
          'icofont-align-right',
          'icofont-all-caps',
          'icofont-bold',
          'icofont-clip-board',
          'icofont-code-alt',
          'icofont-color-picker',
          'icofont-copy',
          'icofont-cut',
          'icofont-delete-alt',
          'icofont-edit-alt',
          'icofont-italic-alt',
          'icofont-justify-all',
          'icofont-justify-center',
          'icofont-justify-left',
          'icofont-justify-right',
          'icofont-pin',
          'icofont-redo',
          'icofont-undo',
        ],
        hidden: true,
        toggleIcon: false
      }
    },
    Material: {
      Action: {
        content: [
          'alarm',
          'account_circle',
          'analytics',
          'android',
          'announcement',
          'api',
          'assessment',
          'backup',
          'bookmark',
          'code',
          'copyright',
          'credit_card',
          'dashboard',
          'delete',
          'done',
          'description',
          'event',
          'explore',
          'history',
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
          'add_location_alt',
          'directions',
          'edit_location',
          'fastfood',
          'flight',
          'hotel',
          'local_gas_station',
          'local_grocery_store',
          'local_hospital',
          'local_hotel',
          'local_library',
          'local_mall',
          'local_parking',
          'local_pharmacy',
          'local_taxi',
          'navigation',
          'near_me',
          'restaurant',
          'traffic'
        ],
        hidden: true,
        toggleIcon: false
      },
      Social: {
        content: [
          'engineering',
          'facebook',
          'group',
          'groups',
          'location_city',
          'notifications',
          'notifications_active',
          'notifications_none',
          'notifications_off',
          'notifications_paused',
          'party_mode',
          'people',
          'person',
          'person_add',
          'person_remove',
          'poll',
          'public',
          'share',
          'thumb_down_alt',
          'thumb_up_alt'
        ],
        hidden: true,
        toggleIcon: false
      },
      Toggle: {
        content: [
          'check_box',
          'check_box_outline_blank',
          'indeterminate_check_box',
          'radio_button_checked',
          'radio_button_unchecked',
          'star',
          'star_border',
          'star_half',
          'star_outline',
          'toggle_off',
          'toggle_on',
        ],
        hidden: true,
        toggleIcon: false
      },
      Navigation: {
        content: [
          'apps',
          'arrow_back',
          'arrow_back_ios',
          'arrow_downward',
          'arrow_drop_down',
          'arrow_drop_down_circle',
          'arrow_drop_up',
          'arrow_forward',
          'arrow_forward_ios',
          'arrow_left',
          'arrow_right',
          'arrow_upward',
          'cancel',
          'check',
          'chevron_left',
          'chevron_right',
          'close',
          'double_arrow',
          'expand_less',
          'expand_more'
        ],
        hidden: true,
        toggleIcon: false
      },
      File: {
        content: [
          'attach_email',
          'attachment',
          'cloud',
          'cloud_circle',
          'cloud_done',
          'cloud_download',
          'cloud_off',
          'cloud_queue',
          'cloud_upload',
          'create_new_folder',
          'folder',
          'folder_open',
          'folder_shared',
          'request_quote',
          'rule_folder',
          'snippet_folder',
          'text_snippet',
          'topic',
        ],
        hidden: true,
        toggleIcon: false
      },
      Content: {
        content: [
          'add',
          'add_box',
          'add_circle',
          'archive',
          'backspace',
          'block',
          'clear',
          'content_copy',
          'content_cut',
          'content_paste',
          'create',
          'drafts',
          'filter_list',
          'flag',
          'link',
          'mail',
          'markunread',
          'reply',
          'save',
          'send'
        ],
        hidden: true,
        toggleIcon: false
      },
      Communication: {
        content: [
          'alternate_email',
          'business',
          'call',
          'call_end',
          'call_made',
          'call_missed',
          'call_received',
          'chat',
          'chat_bubble',
          'comment',
          'contact_mail',
          'contacts',
          'duo',
          'email',
          'forum',
          'live_help',
          'location_off',
          'location_on',
          'message',
          'screen_share'
        ],
        hidden: true,
        toggleIcon: false
      },
      Editor: {
        content: [
          'add_comment',
          'attach_file',
          'format_align_center',
          'format_align_justify',
          'format_align_left',
          'format_align_right',
          'format_italic',
          'format_underlined',
          'insert_chart',
          'insert_link',
          'notes',
          'drafts',
          'filter_list',
          'pie_chart',
          'publish',
          'scatter_plot',
          'subscript',
          'superscript',
          'table_chart',
          'title',
        ],
        hidden: true,
        toggleIcon: false
      },
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
    this.hideAll = true;
    this.hideCategory = false;
  }

  public Clear(): void {
    this.term = '';
    this.titleChosen = 'All';
    this.hideAll = true;
    this.hideCategory = false;
  }

  public selectIcon(subCategory: string, category: string): void {

    this.titleChosen = category + '/' + subCategory;
    if (category === 'IcoFont') {
      this.MaterialSubcategory = ' ';
      this.IcofontSubcategory = subCategory;
      this.hideAll = false;
      this.hideCategory = true;
    }
    if (category === 'Material') {
      this.IcofontSubcategory = ' ';
      this.MaterialSubcategory = subCategory;
      this.hideAll = false;
      this.hideCategory = true;
    }

    console.log(subCategory);

  }


}
