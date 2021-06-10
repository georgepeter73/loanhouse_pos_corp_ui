import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import jQuery from 'jquery';
import {AnimationOptions} from 'ngx-lottie';
import {SetThemeLanguage, SetThemeRTL} from '../../../../store/actions/theme.actions';
import {Language} from '../../../../models/language';
import * as ThemeState from '../../../../store/selectes/theme.selectors';
import {TranslateService} from '@ngx-translate/core';
import {PluginsService} from '../../../../plugins.service';
import {AuthService} from '../../../../auth/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav-bar1',
  templateUrl: './nav-bar1.component.html',
  styleUrls: []
})
export class NavBar1Component implements OnInit {
  bellData: AnimationOptions = {
    path: './assets/images/small/lottie-bell.json'
  };

  mailData: AnimationOptions = {
    path: './assets/images/small/lottie-mail.json'
  };

  breadCrumbItems = [
    {
      isActive: false,
      label: 'Dashboard',
      link: '/dashboard'
    },
    {
      isActive: true,
      label: 'Dashboard',
      link: '/dashboard'
    }
  ];

  messagesList = [
    {
      title: 'Nik Emma Watson',
      image: '/assets/images/user/01.jpg',
      link: '#',
      date_format: '13 Apr'
    },
    {
      title: 'Lorem Ipsum Watson',
      image: '/assets/images/user/02.jpg',
      link: '#',
      date_format: '20 Jun'
    },
    {
      title: 'Why do we use it?',
      image: '/assets/images/user/03.jpg',
      link: '#',
      date_format: '08 July'
    },
    {
      title: 'Variations Passages',
      image: '/assets/images/user/04.jpg',
      link: '#',
      date_format: '12 Sep'
    },
    {
      title: 'Lorem Ipsum generators',
      image: '/assets/images/user/05.jpg',
      link: '#',
      date_format: '5 Dec'
    }
  ];

  notificationList = [
    {
      title: 'New Order Received',
      sub_title: 'Lorem is simply',
      image: null,
      link: '#',
      date_format: '23 hrs ago'
    },
    {
      title: 'Emma Watson Nik',
      sub_title: '95 MB',
      image: '/assets/images/user/01.jpg',
      link: '#',
      date_format: 'Just Now'
    },
    {
      title: 'New customer is join',
      sub_title: 'John Nik',
      image: '/assets/images/user/02.jpg',
      link: '#',
      date_format: '5 days ago'
    },
    {
      title: 'Updates Available',
      sub_title: '120 MB',
      image: '/assets/images/small/jpg.svg',
      link: '#',
      date_format: 'Just Now'
    }
  ];

  countTicket = 0;
  languages: Language[];
  selectedLanguage: Language = new Language({});

  constructor(private store: Store<any>, private translate: TranslateService, private plugins: PluginsService,
              private authService: AuthService,
              private router: Router) {
    store.subscribe(state => (this.countTicket = state.ticketBooking.ticketCount));
    store.select(ThemeState.getLanguages).subscribe((languages) => (this.languages = languages));
    store.select(ThemeState.language).subscribe((language) => (this.selectedLanguage = language));
  }

  ngOnInit() {
  }

  clickPaymentShow(countTicketBooking) {
      if (countTicketBooking > 0) {
        jQuery('.iq-sidebar-right-menu').addClass('film-side');
      }
  }

  changeLanguage(language) {
    const html = document.querySelector('html');

    if (language === 'ar') {
      html.setAttribute('dir', 'rtl');
    } else {
      html.setAttribute('dir', 'ltr');
    }

    this.store.dispatch(new SetThemeRTL((language === 'ar')));
    this.store.dispatch(new SetThemeLanguage(language));
  }

  miniMenu() {
    this.plugins.wrapperMenuToggle();
  }

  signOut() {
    this.authService.signOut();
    }
}
