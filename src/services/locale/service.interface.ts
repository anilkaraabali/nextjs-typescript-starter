import { LocaleEnum } from 'enums/locale/enum';

export interface LocaleServiceInterface {
  /**
   * Sets the current locale
   * @param locale current locale
   */
  setLocale: (locale: LocaleEnum) => void;

  /**
   * Returns the current locale
   */
  getLocale: () => LocaleEnum;
}
