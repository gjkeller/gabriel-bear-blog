module.exports = {
  hooks: {
    readPackage(pkg) {
      // Handle peer dependency warnings for React 19
      if (pkg.name === 'vaul') {
        pkg.peerDependencies = {
          ...pkg.peerDependencies,
          react: '^16.8 || ^17.0 || ^18.0 || ^19.0',
          'react-dom': '^16.8 || ^17.0 || ^18.0 || ^19.0'
        };
      }

      return pkg;
    }
  }
};
