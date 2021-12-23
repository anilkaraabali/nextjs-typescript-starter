import 'intersection-observer';
import 'styles/index.scss';
import type { AppContext, AppProps, NextWebVitalsMetric } from 'next/app';
import App from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { LayoutWrapper } from 'components/LayoutWrapper';
import { LocaleEnum } from 'enums/locale';
import { LocaleService } from 'services/locale';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { locale } = useRouter();

  useEffect(() => {
    LocaleService.setLocale(locale as LocaleEnum);
    document.documentElement.dir = locale === LocaleEnum.AR ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
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
