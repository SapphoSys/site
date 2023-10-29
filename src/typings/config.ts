export default interface Config {
  base: {
    favicon: {
      altText: string;
      fileName: string;
    };
    themeColor: `#${string}`;
    siteName: string;
  };
  blog: {
    comments: {
      enabled: boolean;
      options: {
        'data-repo': string;
        'data-repo-id': string;
        'data-category': string;
        'data-category-id': string;
        'data-mapping': 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
        'data-term'?: string;
        'data-strict': '0' | '1';
        'data-reactions-enabled': '0' | '1';
        'data-emit-metadata': '0' | '1';
        'data-input-position': 'bottom' | 'top';
        'data-theme':
          | 'light'
          | 'light_high_contrast'
          | 'light_protanopia'
          | 'light_tritanopia'
          | 'dark'
          | 'dark_high_contrast'
          | 'dark_protanopia'
          | 'dark_tritanopia'
          | 'dark_dimmed'
          | 'preferred_color_scheme'
          | 'transparent_dark'
          | 'noborder_light'
          | 'noborder_dark'
          | 'cobalt'
          | 'purple_dark'
          | `https://${string}`;
        'data-lang'?:
          | 'ar'
          | 'ca'
          | 'de'
          | 'en'
          | 'eo'
          | 'es'
          | 'fa'
          | 'fr'
          | 'he'
          | 'id'
          | 'it'
          | 'ja'
          | 'ko'
          | 'nl'
          | 'pl'
          | 'pt'
          | 'ro'
          | 'ru'
          | 'th'
          | 'tr'
          | 'vi'
          | 'uk'
          | 'zh-CN'
          | 'zh-TW';
        'data-loading'?: 'lazy';
        'crossorigin': 'anonymous';
      };
    };
    rss: {
      enabled: boolean;
      options: {
        title: string;
        description: string;
        href: string;
      };
    };
  };
  misc: {
    plausible: {
      enabled: boolean;
      options: {
        'data-domain': string;
        'data-api': string;
        'src': string;
      };
    };
  };
}
