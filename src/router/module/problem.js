const problemRoutes = [
  {
    path: '/problem/create',
    name: 'problem_create',
    meta: {
      auth: true,
    },
    component: () => import('@/views/problem/ProblemCreateView.vue'),
  },
  {
    path: '/problem/:id',
    name: 'problem',
    component: () => import('@/views/problem/ProblemDetailView.vue'),
  },
];

export default problemRoutes;
