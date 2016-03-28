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

            return this.auth.login(this.username, this.password).then(function (response) {
              console.log("Login response token: " + response.content.id_token);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsyQkFLYSxLQUFLOzs7Ozs7Ozs2Q0FMVixXQUFXOztpQ0FDWCxNQUFNOzs7QUFJRCxXQUFLO0FBYUwsaUJBYkEsS0FBSyxDQWFKLElBQUksRUFBRTs7O2VBWGxCLE9BQU8sR0FBRyxPQUFPO2VBSWpCLFFBQVEsR0FBRyxFQUFFO2VBQ2IsUUFBUSxHQUFHLEVBQUU7ZUFJYixVQUFVLEdBQUcsRUFBRTs7QUFHYixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7cUJBZlUsS0FBSzs7aUJBaUJYLGlCQUFHOzs7QUFDTixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDbkQsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBRWhCLHFCQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFFbkUsQ0FBQyxTQUNJLENBQUMsVUFBQSxLQUFLLEVBQUk7QUFDZCxvQkFBSyxVQUFVLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNsQyxDQUFDLENBQUM7V0FDSjs7O3FCQTNCVSxLQUFLO0FBQUwsYUFBSyxHQUZqQixNQUFNLENBQUMsV0FBVyxDQUFDLENBRVAsS0FBSyxLQUFMLEtBQUs7ZUFBTCxLQUFLIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAncGF1bHZhbmJsYWRlbC9hdXJlbGlhdXRoJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoQXV0aFNlcnZpY2UpXG5cbmV4cG9ydCBjbGFzcyBMb2dpbiB7XG4gIFxuICBoZWFkaW5nID0gJ0xvZ2luJztcblxuICAvLyBVc2VyIGlucHV0cyB3aWxsIGJlIGJvdW5kIHRvIHRoZXNlIHZpZXcgbW9kZWxzXG4gIC8vIGFuZCB3aGVuIHN1Ym1pdHRpbmcgdGhlIGZvcm0gZm9yIGxvZ2luICBcbiAgdXNlcm5hbWUgPSAnJztcbiAgcGFzc3dvcmQgPSAnJztcblxuICAvLyBUaGlzIHZpZXcgbW9kZWwgd2lsbCBiZSBnaXZlbiBhbiBlcnJvciB2YWx1ZVxuICAvLyBpZiBhbnl0aGluZyBnb2VzIHdyb25nIHdpdGggdGhlIGxvZ2luXG4gIGxvZ2luRXJyb3IgPSAnJztcbiAgICBcbiAgY29uc3RydWN0b3IoYXV0aCkge1xuICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gIH07XG5cbiAgbG9naW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aC5sb2dpbih0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJMb2dpbiByZXNwb25zZSBjb250ZW50OiBcIiArIHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgY29uc29sZS5sb2coXCJMb2dpbiByZXNwb25zZSB0b2tlbjogXCIgKyByZXNwb25zZS5jb250ZW50LmlkX3Rva2VuKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJMb2dpbiByZXNwb25zZSB0b2tlbjogXCIgKyByZXNwb25zZS5jb250ZW50LmlkX3Rva2VuLnBheWxvYWQpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHRoaXMubG9naW5FcnJvciA9IGVycm9yLnJlc3BvbnNlO1xuICAgIH0pO1xuICB9O1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
