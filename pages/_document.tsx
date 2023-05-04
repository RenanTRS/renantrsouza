import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br" prefix="og: https://ogp.me/ns#">
      <Head>
        <link rel="shortcut icon" href="/project.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
