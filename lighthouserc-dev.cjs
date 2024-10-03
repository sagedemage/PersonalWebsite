/* Lighthouse config for Development */

website_url = 'http://localhost:4321/PersonalWebsite'

module.exports = {
  ci: {
    collect: {
      url: [
        website_url + '/',
        website_url + '/projects'
      ],
      startServerCommand: 'npm run dev',
    },
    assert: {
      assertions: {
        // Errors
        "categories:performance": ["error", { "minScore": 0.6 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["error", { "minScore": 1.0 }],
        "categories:seo": ["error", { "minScore": 0.9 }],

        // Warnings
        "categories:performance": ["warn", { "minScore": 0.95 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
