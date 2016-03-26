System.register(['paulvanbladel/aureliauth', 'aurelia-framework'], function (_export) {
  'use strict';

  var AuthService, inject, Logout;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_paulvanbladelAureliauth) {
      AuthService = _paulvanbladelAureliauth.AuthService;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      Logout = (function () {
        function Logout(authService) {
          _classCallCheck(this, _Logout);

          this.authService = authService;
        }

        _createClass(Logout, [{
          key: 'activate',
          value: function activate() {
            this.authService.logout("#/login").then(function (response) {
              console.log("Logged Out");
            })['catch'](function (err) {
              console.log("Error Logging Out");
            });
          }
        }]);

        var _Logout = Logout;
        Logout = inject(AuthService)(Logout) || Logout;
        return Logout;
      })();

      _export('Logout', Logout);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC9sb2dvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzJCQU9hLE1BQU07Ozs7Ozs7OzZDQVBYLFdBQVc7O2lDQUNYLE1BQU07OztBQU1ELFlBQU07QUFFTixpQkFGQSxNQUFNLENBRUwsV0FBVyxFQUFFOzs7QUFDdkIsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDaEM7O3FCQUpVLE1BQU07O2lCQU1ULG9CQUFHO0FBSVQsZ0JBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUNqQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIscUJBQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0IsQ0FBQyxTQUNJLENBQUMsVUFBQSxHQUFHLEVBQUk7QUFDWixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQ2xDLENBQUMsQ0FBQztXQUVKOzs7c0JBbEJVLE1BQU07QUFBTixjQUFNLEdBRmxCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FFUCxNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU0iLCJmaWxlIjoibG9nb3V0L2xvZ291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJ3BhdWx2YW5ibGFkZWwvYXVyZWxpYXV0aCc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG4vLyBVc2luZyBBdXJlbGlhJ3MgZGVwZW5kZW5jeSBpbmplY3Rpb24sIHdlIGluamVjdCB0aGUgQXV0aFNlcnZpY2Vcbi8vIHdpdGggdGhlIEBpbmplY3QgZGVjb3JhdG9yXG5AaW5qZWN0KEF1dGhTZXJ2aWNlKVxuXG5leHBvcnQgY2xhc3MgTG9nb3V0IHtcblxuICBjb25zdHJ1Y3RvcihhdXRoU2VydmljZSkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBhdXRoU2VydmljZTtcbiAgfTtcbiAgXG4gIGFjdGl2YXRlKCkge1xuICAgIC8vIFdoZW4gd2UgZ2V0IHRvIHRoZSBsb2dvdXQgcm91dGUsIHRoZSBsb2dvdXQgXG4gICAgLy8gbWV0aG9kIG9uIHRoZSBhdXRoIHNlcnZpY2Ugd2lsbCBiZSBjYWxsZWQgIFxuICAgIC8vIGFuZCB3ZSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gdGhlIGxvZ2luIHZpZXdcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dChcIiMvbG9naW5cIilcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkxvZ2dlZCBPdXRcIik7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgTG9nZ2luZyBPdXRcIik7XG4gICAgfSk7XG5cbiAgfTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
