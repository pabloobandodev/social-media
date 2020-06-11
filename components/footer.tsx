/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import author from '../lib/meta'

const {
  social: { twitter, github, linked_in, email },
} = author

const links: {
  url: string
  icon: React.ReactNode
}[] = [
  {
    url: `https://twitter.com/${twitter}`,
    icon: <FaTwitter className={'icon'} />,
  },
  {
    url: `https://github.com/${github}`,
    icon: <FaGithub className={'icon'} />,
  },
  {
    url: `https://linkedin.com/in/${linked_in}`,
    icon: <FaLinkedinIn className={'icon'} />,
  },
  {
    url: `mailto:${email}`,
    icon: <FaEnvelope className={'icon'} />,
  },
]

export default function Footer() {
  return (
    <footer
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30rem;
      `}
    >
      {links.map(({ url, icon }) => (
        <a
          key={url}
          href={url}
          css={css`
            color: #36638a;
            font-size: 2rem;
            &:hover {
              color: #9cafc3;
              transform: scale(1.2);
            }
          `}
        >
          {icon}
        </a>
      ))}
    </footer>
  )
}
