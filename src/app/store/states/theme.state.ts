import {User} from '../../models/user';
import {Color} from '../../models/color';
import {Language} from '../../models/language';

export interface ThemeState {
  color: string;
  language: string;
  isRTL: boolean;
  isDark: boolean;
  menu: {
    menuType: string,
    sideBarMenu: string
  };
  languages: Language[];
  colors: Color[];
  users: User[];
  authUser: object;
}

export const initialThemeState: ThemeState = {
  color: 'rgba(255,136,172,1)',
  language: 'en',
  isRTL: false,
  isDark: false,
  menu : {
    menuType: 'vertical',
    sideBarMenu: 'full'
  },
  languages: [
    new Language({ title: 'English', value: 'en', image: './assets/images/small/flag-01.png' }),
    new Language({ title: 'Arabic', value: 'ar', image: './assets/images/small/flag-500.png' }),
    new Language({ title: 'Chinese', value: 'chi', image: './assets/images/small/flag-300.png' }),
    new Language({ title: 'Hindi', value: 'hi', image: './assets/images/small/flag-100.png' }),
    new Language({ title: 'Greek', value: 'gr', image: './assets/images/small/flag-400.png' }),
    new Language({ title: 'French', value: 'fr', image: './assets/images/small/flag-200.png' })
  ],
  colors: [
    new Color({}),
    { primary: '#6475c7', primaryLight: '#7abbf3', bodyBgLight: '#eaf5ff', bodyBgDark: '#1d203f', default: true },
    { primary: '#e07af3', primaryLight: '#f37ab7', bodyBgLight: '#f7eefd', bodyBgDark: '#1d203f', default: false },
    { primary: '#c76464', primaryLight: '#f3c37a', bodyBgLight: '#fff8ea', bodyBgDark: '#1d203f', default: false },
    { primary: '#c764ad', primaryLight: '#de8ba9', bodyBgLight: '#ffeaf5', bodyBgDark: '#1d203f', default: false },
    { primary: '#64c7ac', primaryLight: '#a3f37a', bodyBgLight: '#f0ffea', bodyBgDark: '#1d203f', default: false },
    { primary: '#8ac764', primaryLight: '#dbf37a', bodyBgLight: '#f7ffea', bodyBgDark: '#1d203f', default: false },

  ],
  users: [
    new User({id: '1', name: 'Andy Mabbett', email: 'admin@vito.com', password: '12345678', image: './assets/images/user/03.jpg'}),
    new User({id: '2', name: 'Nik John', email: 'nik@test.com', password: '12345678', image: './assets/images/user/05.jpg'}),
    new User({id: '3', name: 'Ag Bro', email: 'agbro@test.com', password: '12345678', image: './assets/images/user/07.jpg'}),
  ],
  authUser: {
    auth: false,
    authType: '',
    user: User
  }
};
