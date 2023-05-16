/* Lighthouse config for Production */

website_url = 'https://salmaansaeed.netlify.app'

module.exports = {
  ci: {
    collect: {
      url: [
        website_url + '/',
        website_url + '/projects'
      ],
    },
    assert: {
      assertions: {
        // Errors
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 1.0}],
        "categories:best-practices": ["error", {"minScore": 1.0}],
        "categories:seo": ["error", {"minScore": 1.0}],
        
        // Warnings
        "categories:performance": ["warn", {"minScore": 0.95}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
