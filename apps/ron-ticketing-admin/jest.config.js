module.exports = {
  name: 'ron-ticketing-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ron-ticketing-admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
