/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import Layout from '../components/layout'
import Footer from '../components/footer'

export default function Sign() {
  return (
    <Layout>
      <Head>
        <title>Sign</title>
      </Head>
      <main
        css={css`
          margin-top: 6rem;
        `}
      >
        <article
          css={css`
            justify-content: space-around;
            display: flex;
            align-items: center;
          `}
        >
          <img
            src='/images/login.png'
            alt='welcome image'
            css={css`
              height: 350px;
              width: auto;
            `}
          />
          <div
            css={css`
              width: 30rem;
              height: auto;
              text-align: center;
              padding: 1rem;
              background-color: #ffffff;
            `}
          >
            <h1
              css={css`
                margin: 3rem 0;
                font-style: italic;
              `}
            >
              Welcome
            </h1>
            <form
              css={css`
                width: 100%;
                background-color: pink;
              `}
            >
              form
            </form>
          </div>
        </article>
      </main>
      <Footer />
    </Layout>
  )
}
