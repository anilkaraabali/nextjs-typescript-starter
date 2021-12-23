import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

import { LocaleEnum } from 'enums/locale';

class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html dir={this.props.locale === LocaleEnum.AR ? 'rtl' : 'ltr'}>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&display=swap'
            rel='stylesheet'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;
