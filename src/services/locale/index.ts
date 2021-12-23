import { LocaleEnum } from 'enums/locale';

import { ILocaleService } from './interface';

let locale = LocaleEnum.EN;

export const LocaleService: ILocaleService = {
  setLocale: (_locale) => {
    locale = _locale;
  },
  getLocale: () => locale,
};
