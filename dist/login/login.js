System.register(['paulvanbladel/aureliauth', 'aurelia-framework'], function (_export) {
  'use strict';

  var AuthService, inject, Login;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_paulvanbladelAureliauth) {
      AuthService = _paulvanbladelAureliauth.AuthService;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      Login = (function () {
        function Login(auth) {
          _classCallCheck(this, _Login);

          this.heading = 'Login';
          this.email = '';
          this.password = '';
          this.loginError = '';

          this.auth = auth;
        }

        _createClass(Login, [{
          key: 'login',
          value: function login() {
            var _this = this;

            console.log("email: " + this.email);

            console.log("password: " + this.password);

            return this.auth.login(this.email, this.password).then(function (response) {
              console.log("respuestaaaaa");
            })['catch'](function (error) {
              _this.loginError = error.response;
            });
          }
        }]);

        var _Login = Login;
        Login = inject(AuthService)(Login) || Login;
        return Login;
      })();

      _export('Login', Login);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsyQkFLYSxLQUFLOzs7Ozs7Ozs2Q0FMVixXQUFXOztpQ0FDWCxNQUFNOzs7QUFJRCxXQUFLO0FBYUwsaUJBYkEsS0FBSyxDQWFKLElBQUksRUFBRTs7O2VBWGxCLE9BQU8sR0FBRyxPQUFPO2VBSWpCLEtBQUssR0FBRyxFQUFFO2VBQ1YsUUFBUSxHQUFHLEVBQUU7ZUFJYixVQUFVLEdBQUcsRUFBRTs7QUFHYixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7cUJBZlUsS0FBSzs7aUJBaUJYLGlCQUFHOzs7QUFDSixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUcxQyxtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDaEQsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBSWhCLHFCQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQzlCLENBQUMsU0FDSSxDQUFDLFVBQUEsS0FBSyxFQUFJO0FBQ2Qsb0JBQUssVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDbEMsQ0FBQyxDQUFDO1dBQ0o7OztxQkFqQ1UsS0FBSztBQUFMLGFBQUssR0FGakIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUVQLEtBQUssS0FBTCxLQUFLO2VBQUwsS0FBSyIsImZpbGUiOiJsb2dpbi9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJ3BhdWx2YW5ibGFkZWwvYXVyZWxpYXV0aCc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEF1dGhTZXJ2aWNlKVxuXG5leHBvcnQgY2xhc3MgTG9naW4ge1xuICBcbiAgaGVhZGluZyA9ICdMb2dpbic7XG5cbiAgLy8gVXNlciBpbnB1dHMgd2lsbCBiZSBib3VuZCB0byB0aGVzZSB2aWV3IG1vZGVsc1xuICAvLyBhbmQgd2hlbiBzdWJtaXR0aW5nIHRoZSBmb3JtIGZvciBsb2dpbiAgXG4gIGVtYWlsID0gJyc7XG4gIHBhc3N3b3JkID0gJyc7XG5cbiAgLy8gVGhpcyB2aWV3IG1vZGVsIHdpbGwgYmUgZ2l2ZW4gYW4gZXJyb3IgdmFsdWVcbiAgLy8gaWYgYW55dGhpbmcgZ29lcyB3cm9uZyB3aXRoIHRoZSBsb2dpblxuICBsb2dpbkVycm9yID0gJyc7XG4gICAgXG4gIGNvbnN0cnVjdG9yKGF1dGgpIHtcbiAgICB0aGlzLmF1dGggPSBhdXRoO1xuICB9O1xuXG4gIGxvZ2luKCkge1xuICAgICAgY29uc29sZS5sb2coXCJlbWFpbDogXCIrdGhpcy5lbWFpbCk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQ6IFwiK3RoaXMucGFzc3dvcmQpO1xuICAgICAgXG4gICAgICBcbiAgICByZXR1cm4gdGhpcy5hdXRoLmxvZ2luKHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhcIkxvZ2luIHJlc3BvbnNlIGNvbnRlbnQ6IFwiICsgcmVzcG9uc2UuY29udGVudCk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiTG9naW4gcmVzcG9uc2UgdG9rZW46IFwiICsgcmVzcG9uc2UuY29udGVudC5pZF90b2tlbik7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiTG9naW4gcmVzcG9uc2UgdG9rZW46IFwiICsgcmVzcG9uc2UuY29udGVudC5pZF90b2tlbi5wYXlsb2FkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcHVlc3RhYWFhYVwiKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICB0aGlzLmxvZ2luRXJyb3IgPSBlcnJvci5yZXNwb25zZTtcbiAgICB9KTtcbiAgfTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
