/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        max-width: 60rem;
        padding: 0 1rem;
        margin: 0rem auto 6rem;
        display: flex;
        flex-direction: column;
      `}
    >
      {children}
    </div>
  )
}
