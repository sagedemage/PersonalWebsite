module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/projects'
      ],
      startServerCommand: 'npm run build && npm run start',
    },
    assert: {
      assertions: {
        "categories:performance": ["error", {"minScore": 0.74}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.9}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
