import { LocaleEnum } from 'enums/locale/enum';

import { LocaleServiceInterface } from './service.interface';

let locale = LocaleEnum.en;

export const LocaleService: LocaleServiceInterface = {
  setLocale: (_locale) => {
    locale = _locale;
  },
  getLocale: () => locale,
};
