import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentProps,
} from 'next/document';

export default class MyDocument extends Document<DocumentProps> {
    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="UTF-8" />

                    <link rel="icon" href="/favicon.ico" />

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