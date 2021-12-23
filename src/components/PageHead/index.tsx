import Head from 'next/head';

interface IPageHead {
  title: string;
  description: string;
  shouldIndex?: boolean;
  pageUrl?: string;
  alternateUrl?: string;
  pageNextUrl?: string;
  pagePreviousUrl?: string;
}

export const PageHead: React.FC<IPageHead> = ({
  title,
  description,
  shouldIndex = true,
  pageUrl,
  pageNextUrl,
  pagePreviousUrl,
}) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    {pageUrl && (
      <>
        <link href={pageUrl} rel='canonical' />
        <meta property='og:url' content={pageUrl} />
      </>
    )}
    {pagePreviousUrl && <link href={pagePreviousUrl} rel='prev' />}
    {pageNextUrl && <link href={pageNextUrl} rel='next' />}
    <meta name='robots' content={`${shouldIndex ? '' : 'no'}index,follow`} />
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
    <meta name='msapplication-TileColor' content='#ffffff' />
    <meta name='theme-color' content='#ffffff' />
    <link rel='manifest' href='/en/static/manifest.json' />
    <link rel='mask-icon' href='/en/static/favicon/safari-pinned-tab.svg' color='#ef5e4e' />
  </Head>
);
