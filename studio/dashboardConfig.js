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
                  buildHookId: '5d4ca225e6ec8d798cf7b3bd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-z179773q',
                  apiId: '1e9e16ba-cb7b-451f-bfba-1fedb78d3983'
                },
                {
                  buildHookId: '5d4ca225e6654bf0ff70d771',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kft53wfx',
                  apiId: 'a6aa19ae-4c4a-4e1e-ba38-884d4c73a968'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mouyyad/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kft53wfx.netlify.com', category: 'apps'}
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
