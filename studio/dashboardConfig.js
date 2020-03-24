export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e7a2f158081822e12700676',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dpc1yxsm',
                  apiId: '8011ecdd-6daa-4716-9026-953f86f07204'
                },
                {
                  buildHookId: '5e7a2f193404546fc2033d92',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kv16qh5j',
                  apiId: 'db7c4429-8f24-4f9a-bff8-7ea36896e742'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cruzlutor/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kv16qh5j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
