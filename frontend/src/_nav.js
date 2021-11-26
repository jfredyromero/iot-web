export default [
  {
    component: 'CNavItem',
    name: 'Estadísticas',
    to: '/dashboard',
    icon: 'cil-chart',
    // badge: {
    //   color: 'primary',
    //   text: 'NEW',
    // },
  },
  {
    component: 'CNavTitle',
    name: 'Variables',
  },
  {
    component: 'CNavTitle',
    name: 'Microcontroladores',
    icon: 'cil-memory',
    items: [
      {
        component: 'CNavItem',
        name: 'Arduino',
        to: '/theme/colors',
      },
      {
        component: 'CNavItem',
        name: 'ESP32',
        to: '/theme/tgraphy',
      },
      {
        component: 'CNavItem',
        name: 'Beagle',
        to: '/theme/typogrhy',
      },
      {
        component: 'CNavItem',
        name: 'Raspberry',
        to: '/theme/typo',
      },
    ],
  },
  {
    component: 'CNavTitle',
    name: 'Components',
  },
  {
    component: 'CNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie',
  },
  {
    component: 'CNavGroup',
    name: 'Notifications',
    to: '/notifications',
    icon: 'cil-bell',
    items: [
      {
        component: 'CNavItem',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: 'CNavItem',
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: 'CNavItem',
        name: 'Modals',
        to: '/notifications/modals',
      },
    ],
  },

  {
    component: 'CNavTitle',
    name: 'Extras',
  },
  {
    component: 'CNavGroup',
    name: 'Pages',
    to: '/pages',
    icon: 'cil-star',
    items: [
      {
        component: 'CNavItem',
        name: 'Login',
        to: '/pages/login',
      },
      {
        component: 'CNavItem',
        name: 'Register',
        to: '/pages/register',
      },
      {
        component: 'CNavItem',
        name: 'Error 404',
        to: '/pages/404',
      },
      {
        component: 'CNavItem',
        name: 'Error 500',
        to: '/pages/500',
      },
    ],
  },

  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
