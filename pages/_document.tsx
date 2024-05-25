import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentProps,
} from 'next/document';
import Script from "next/script";

export default class MyDocument extends Document<DocumentProps> {
    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="UTF-8" />

                    <link rel="icon" href="/favicon.ico" />
                    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-GWS7XE70JJ"></Script>
                    <Script id='google-analytics'>
                        {`window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-GWS7XE70JJ');`}
                    </Script>
                    <noscript>
                        <link href="./styles/aos-noscript.css" rel="stylesheet" />
                    </noscript>

                </Head>

                <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>

                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}