export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '631efee04b976e7b81558719',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-studio-jwtnzymg',
                  apiId: '8ba7ab48-f901-4360-8bac-06b1b51e2f6c'
                },
                {
                  buildHookId: '631efee0780f1a790dcb3081',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-web-8jtgarna',
                  apiId: 'efb2f25e-38aa-4eed-bc2c-d758d3bcff81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kalo69/sanity-nextjs',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-web-8jtgarna.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
