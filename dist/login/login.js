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
          this.username = '';
          this.password = '';
          this.loginError = '';

          this.auth = auth;
        }

        _createClass(Login, [{
          key: 'login',
          value: function login() {
            var _this = this;

            console.log("username: " + this.username);

            console.log("password: " + this.password);

            return this.auth.login(this.username, this.password).then(function (response) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsyQkFLYSxLQUFLOzs7Ozs7Ozs2Q0FMVixXQUFXOztpQ0FDWCxNQUFNOzs7QUFJRCxXQUFLO0FBY0wsaUJBZEEsS0FBSyxDQWNKLElBQUksRUFBRTs7O2VBWmxCLE9BQU8sR0FBRyxPQUFPO2VBS2pCLFFBQVEsR0FBRyxFQUFFO2VBQ2IsUUFBUSxHQUFHLEVBQUU7ZUFJYixVQUFVLEdBQUcsRUFBRTs7QUFHYixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7cUJBaEJVLEtBQUs7O2lCQWtCWCxpQkFBRzs7O0FBQ0osbUJBQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFeEMsbUJBQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFHMUMsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ25ELElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUloQixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUM5QixDQUFDLFNBQ0ksQ0FBQyxVQUFBLEtBQUssRUFBSTtBQUNkLG9CQUFLLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ2xDLENBQUMsQ0FBQztXQUNKOzs7cUJBbENVLEtBQUs7QUFBTCxhQUFLLEdBRmpCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FFUCxLQUFLLEtBQUwsS0FBSztlQUFMLEtBQUsiLCJmaWxlIjoibG9naW4vbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICdwYXVsdmFuYmxhZGVsL2F1cmVsaWF1dGgnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChBdXRoU2VydmljZSlcblxuZXhwb3J0IGNsYXNzIExvZ2luIHtcbiAgXG4gIGhlYWRpbmcgPSAnTG9naW4nO1xuXG4gIC8vIFVzZXIgaW5wdXRzIHdpbGwgYmUgYm91bmQgdG8gdGhlc2UgdmlldyBtb2RlbHNcbiAgLy8gYW5kIHdoZW4gc3VibWl0dGluZyB0aGUgZm9ybSBmb3IgbG9naW4gIFxuICAvL2VtYWlsID0gJyc7XG4gIHVzZXJuYW1lID0gJyc7XG4gIHBhc3N3b3JkID0gJyc7XG5cbiAgLy8gVGhpcyB2aWV3IG1vZGVsIHdpbGwgYmUgZ2l2ZW4gYW4gZXJyb3IgdmFsdWVcbiAgLy8gaWYgYW55dGhpbmcgZ29lcyB3cm9uZyB3aXRoIHRoZSBsb2dpblxuICBsb2dpbkVycm9yID0gJyc7XG4gICAgXG4gIGNvbnN0cnVjdG9yKGF1dGgpIHtcbiAgICB0aGlzLmF1dGggPSBhdXRoO1xuICB9O1xuXG4gIGxvZ2luKCkge1xuICAgICAgY29uc29sZS5sb2coXCJ1c2VybmFtZTogXCIrdGhpcy51c2VybmFtZSk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQ6IFwiK3RoaXMucGFzc3dvcmQpO1xuICAgICAgXG4gICAgICBcbiAgICByZXR1cm4gdGhpcy5hdXRoLmxvZ2luKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhcIkxvZ2luIHJlc3BvbnNlIGNvbnRlbnQ6IFwiICsgcmVzcG9uc2UuY29udGVudCk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiTG9naW4gcmVzcG9uc2UgdG9rZW46IFwiICsgcmVzcG9uc2UuY29udGVudC5pZF90b2tlbik7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiTG9naW4gcmVzcG9uc2UgdG9rZW46IFwiICsgcmVzcG9uc2UuY29udGVudC5pZF90b2tlbi5wYXlsb2FkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcHVlc3RhYWFhYVwiKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICB0aGlzLmxvZ2luRXJyb3IgPSBlcnJvci5yZXNwb25zZTtcbiAgICB9KTtcbiAgfTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
