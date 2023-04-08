module.exports = {
    ci: {
        collect: {
            url: [
              'http://localhost:3000/',
              'http://localhost:3000/projects'
            ],
            startServerCommand: 'npm run build && npm run start',
          },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };