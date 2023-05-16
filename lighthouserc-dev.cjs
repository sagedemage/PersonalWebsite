/* Lighthouse config for Development */
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/projects'
      ],
      startServerCommand: 'npm run dev',
    },
    assert: {
      assertions: {
        // Errors
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 1.0}],
        "categories:best-practices": ["error", {"minScore": 1.0}],
        "categories:seo": ["error", {"minScore": 0.9}],
        
        // Warnings
        "categories:performance": ["warn", {"minScore": 0.95}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
