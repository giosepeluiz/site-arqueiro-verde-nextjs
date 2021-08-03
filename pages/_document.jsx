import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <title>Fique no Controle</title>
            <meta charset="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <Script src="https://kit.fontawesome.com/f71e23f512.js" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument