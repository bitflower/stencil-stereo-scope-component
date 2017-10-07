exports.config = {
  namespace: 'stereoscope',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['stereo-scope'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};