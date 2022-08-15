const route = [
  {
    text: '综合概览',
    meta: {},
    path: '/comprehensive-overview',
    redirect: '/',
    component: () => import('@/views/comprehensive-overview'),
    children: [
    ],
  },
  {
    text: '改革成效',
    meta: {},
    path: '/reform-effect',
    redirect: '/reform-effect',
    component: () => import('@/views/reform-effect'),
    children: [
    ],
  }
]
export default route
