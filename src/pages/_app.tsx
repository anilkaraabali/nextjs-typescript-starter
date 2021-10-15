import 'intersection-observer';
import 'styles/globals.scss';
import { LayoutComponent } from 'layout/component';
import type { AppContext, AppProps, NextWebVitalsMetric } from 'next/app';
import App from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { LocaleEnum } from 'enums/locale/enum';
import { LocaleService } from 'services/locale/service';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { locale } = useRouter();

  useEffect(() => {
    LocaleService.setLocale(locale as LocaleEnum);
    document.documentElement.dir = locale === LocaleEnum.ar ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  // eslint-disable-next-line no-console
  console.log(`CWV-${metric.name.replace('Next.js-', '')}:${Math.round(metric.value)}:${Math.round(metric.startTime)}`);
}

MyApp.getInitialProps = async (appContext: AppContext): Promise<{ pageProps: unknown }> => ({
  ...(await App.getInitialProps(appContext)),
});

export default MyApp;
