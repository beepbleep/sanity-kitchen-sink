export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5faeddd7d011b52434a2188e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-w9w83nfe',
                  apiId: 'b7dc038d-934e-4d11-b639-4c8425362781'
                },
                {
                  buildHookId: '5faeddd7c7bace26f7eb8a8e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nqx87bgw',
                  apiId: '3be4df11-99bd-4662-8b5b-870ac5850f97'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beepbleep/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nqx87bgw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
