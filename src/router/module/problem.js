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
    name: 'problem_detail',
    component: () => import('@/views/problem/ProblemDetailView.vue'),
  },
  {
    path: '/problem',
    name: 'problem_list',
    component: () => import('@/views/problem/ProblemListView.vue'),
  },
];

export default problemRoutes;
