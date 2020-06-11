type Author = {
  title: string
  description: string
  name: string
  social: {
    twitter: string
    github: string
    linked_in: string
    email: string
  }
}

const author: Author = {
  title: 'Kevin Wolf',
  description: 'Full Stack developer from San José, Costa Rica',
  name: 'Kevin Wolf',
  social: {
    twitter: '@pabloobandodev',
    github: 'pabloobandodev',
    linked_in: 'pabloobandodev',
    email: 'josepabloobandogonzalez@gmail.com',
  },
}

export default author
