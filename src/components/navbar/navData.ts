
export interface NavLink {
  path: string;
  label: string;
  translationKey: string;
}

export const navLinks: NavLink[] = [
  { path: '/', label: 'Home', translationKey: 'navigation.home' },
  { path: '/products', label: 'Products', translationKey: 'navigation.products' },
  { path: '/projects', label: 'Projects', translationKey: 'navigation.projects' },
  { path: '/about', label: 'About Us', translationKey: 'navigation.about' },
  { path: '/contact', label: 'Contact', translationKey: 'navigation.contact' },
];

export interface LanguageOption {
  code: string;
  name: string;
  translationKey: string;
}

export const languages: LanguageOption[] = [
  { 
    code: 'en', 
    name: 'English', 
    translationKey: 'language.english'
  },
  { 
    code: 'zh', 
    name: '中文', 
    translationKey: 'language.chinese'
  }
];
