System.register(['./auth-config'], function (_export) {
  'use strict';

  var config;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('paulvanbladel/aureliauth', function (baseConfig) {
      baseConfig.configure(config);
    });

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [function (_authConfig) {
      config = _authConfig['default'];
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3Rlcy1hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVPLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQU1qQyxXQUFPLENBQUMsR0FBRyxDQUNSLHFCQUFxQixFQUFFLENBQ3ZCLGtCQUFrQixFQUFFLENBQ3BCLE1BQU0sQ0FBQywwQkFBMEIsRUFBRSxVQUFDLFVBQVUsRUFBSztBQUMvQyxnQkFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNqQyxDQUFDLENBQUM7O0FBRUwsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7YUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO0tBQUEsQ0FBQyxDQUFDO0dBQ3hDIiwiZmlsZSI6InF1b3Rlcy1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4vYXV0aC1jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEpIHtcblxuICAvLyBIZXJlIHdlIHByb3ZpZGUgY29uZmlndXJhdGlvbiBmb3Igb3VyIGFwcGxpY2F0aW9uIGFuZCBjYW5cbiAgLy8gYnJpbmcgaW4gdGhlIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3Mgd2UgcHV0IHdpdGhpbiBhdXRoLWNvbmZpZy5qc1xuICAvLyB0aGF0IHdpbGwgdGVsbCB0aGUgYXVyZWxpYXV0aCBwbHVnaW4gdGhlIHNwZWNpZmljIHNldHRpbmdzXG4gIC8vIGZvciBvdXIgYXBwbGljYXRpb24ncyBhdXRoZW50aWNhdGlvbiBjb250ZXh0XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmRldmVsb3BtZW50TG9nZ2luZygpXG4gICAgLnBsdWdpbigncGF1bHZhbmJsYWRlbC9hdXJlbGlhdXRoJywgKGJhc2VDb25maWcpID0+IHtcbiAgICAgICAgIGJhc2VDb25maWcuY29uZmlndXJlKGNvbmZpZyk7XG4gICAgfSk7XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oYSA9PiBhLnNldFJvb3QoKSk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
