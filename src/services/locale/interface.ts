import { LocaleEnum } from 'enums/locale';

export interface ILocaleService {
  /**
   * Sets the current locale
   *
   * @param {LocaleEnum} locale The current locale
   * @example
   * // returns en
   * setLocale(LocaleEnum.EN)
   * @example
   * // returns tr
   * setLocale(LocaleEnum.TR)
   */
  setLocale: (locale: LocaleEnum) => void;

  /**
   * Returns the current locale
   *
   * @example
   * // returns en
   * getLocale()
   * @example
   * // returns tr
   * getLocale()
   */
  getLocale: () => LocaleEnum;
}
