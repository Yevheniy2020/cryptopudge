import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import Script from 'next/script';  // Ensure you import Script from 'next/script'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="UTF-8" />
                    <link rel="icon" href="/favicon.ico" />
                    <noscript>
                        <link href="./styles/aos-noscript.css" rel="stylesheet" />
                    </noscript>
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-GWS7XE70JJ"
                        strategy="afterInteractive"
                        async
                    />
                    <Script
                        id="google-analytics"
                        strategy="afterInteractive"
                    >
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-GWS7XE70JJ');
                        `}
                    </Script>
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
