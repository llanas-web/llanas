export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://boris-maurence.com/images/boris-2.png',
      light: 'https://boris-maurence.com/images/boris-2.png',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/borismaurence/',
      'target': '_blank',
      'aria-label': 'Boris MAURENCE on LinkedIn'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/llanas-web',
      'target': '_blank',
      'aria-label': 'llanas-web on GitHub'
    }]
  }
})
