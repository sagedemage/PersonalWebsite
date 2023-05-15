module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/projects'
      ],
      startServerCommand: 'npm run build && npm run preview',
    },
    assert: {
      assertions: {
        // Errors
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.95}],
        "categories:best-practices": ["error", {"minScore": 0.95}],
        "categories:seo": ["error", {"minScore": 0.95}],
        
        // Warnings
        "categories:performance": ["warn", {"minScore": 0.95}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
