import { AppProps } from 'next/app'
import { Global, css } from '@emotion/core'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            background-color: #fafafa;
          }
          * {
            box-sizing: border-box;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}
