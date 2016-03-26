System.register(['aurelia-framework', 'paulvanbladel/aureliauth'], function (_export) {
  'use strict';

  var inject, AuthService, Signup;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_paulvanbladelAureliauth) {
      AuthService = _paulvanbladelAureliauth.AuthService;
    }],
    execute: function () {
      Signup = (function () {
        function Signup(auth) {
          _classCallCheck(this, _Signup);

          this.heading = 'Sign Up';
          this.email = '';
          this.password = '';
          this.signupError = '';

          this.auth = auth;
        }

        _createClass(Signup, [{
          key: 'signup',
          value: function signup() {
            var _this = this;

            var userInfo = { email: this.email, password: this.password };

            return this.auth.signup(userInfo).then(function (response) {
              console.log("Signed Up!");
            })['catch'](function (error) {
              _this.signupError = error.response;
            });
          }
        }]);

        var _Signup = Signup;
        Signup = inject(AuthService)(Signup) || Signup;
        return Signup;
      })();

      _export('Signup', Signup);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzJCQU9hLE1BQU07Ozs7Ozs7O2lDQVBYLE1BQU07OzZDQUNOLFdBQVc7OztBQU1OLFlBQU07QUFjTixpQkFkQSxNQUFNLENBY0wsSUFBSSxFQUFFOzs7ZUFabEIsT0FBTyxHQUFHLFNBQVM7ZUFJbkIsS0FBSyxHQUFHLEVBQUU7ZUFDVixRQUFRLEdBQUcsRUFBRTtlQUtiLFdBQVcsR0FBRyxFQUFFOztBQUdkLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOztxQkFoQlUsTUFBTTs7aUJBa0JYLGtCQUFHOzs7QUFHUCxnQkFBSSxRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBOztBQUU3RCxtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FDaEMsSUFBSSxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQ2xCLHFCQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzNCLENBQUMsU0FDSSxDQUFDLFVBQUEsS0FBSyxFQUFJO0FBQ2Qsb0JBQUssV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDbkMsQ0FBQyxDQUFDO1dBRUo7OztzQkEvQlUsTUFBTTtBQUFOLGNBQU0sR0FGbEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUVQLE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTSIsImZpbGUiOiJzaWdudXAvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJ3BhdWx2YW5ibGFkZWwvYXVyZWxpYXV0aCc7XG5cbi8vIFVzaW5nIEF1cmVsaWEncyBkZXBlbmRlbmN5IGluamVjdGlvbiwgd2UgaW5qZWN0IHRoZSBBdXRoU2VydmljZVxuLy8gd2l0aCB0aGUgQGluamVjdCBkZWNvcmF0b3JcbkBpbmplY3QoQXV0aFNlcnZpY2UpXG5cbmV4cG9ydCBjbGFzcyBTaWdudXAge1xuICBcbiAgaGVhZGluZyA9ICdTaWduIFVwJztcblxuICAvLyBUaGVzZSB2aWV3IG1vZGVscyB3aWxsIGJlIGdpdmVuIHZhbHVlc1xuICAvLyBmcm9tIHRoZSBzaWdudXAgZm9ybSB1c2VyIGlucHV0XG4gIGVtYWlsID0gJyc7XG4gIHBhc3N3b3JkID0gJyc7XG5cbiAgLy8gQW55IHNpZ251cCBlcnJvcnMgd2lsbCBiZSByZXBvcnRlZCBieVxuICAvLyBnaXZpbmcgdGhpcyB2aWV3IG1vZGVsIGEgdmFsdWUgaW4gdGhlXG4gIC8vIGNhdGNoIGJsb2NrIHdpdGhpbiB0aGUgc2lnbnVwIG1ldGhvZFxuICBzaWdudXBFcnJvciA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGF1dGgpIHtcbiAgICB0aGlzLmF1dGggPSBhdXRoO1xuICB9O1xuXG4gIHNpZ251cCgpIHtcblxuICAgIC8vIE9iamVjdCB0byBob2xkIHRoZSB2aWV3IG1vZGVsIHZhbHVlcyBwYXNzZWQgaW50byB0aGUgc2lnbnVwIG1ldGhvZFxuICAgIHZhciB1c2VySW5mbyA9IHsgZW1haWw6IHRoaXMuZW1haWwsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkIH1cblxuICAgIHJldHVybiB0aGlzLmF1dGguc2lnbnVwKHVzZXJJbmZvKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJTaWduZWQgVXAhXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHRoaXMuc2lnbnVwRXJyb3IgPSBlcnJvci5yZXNwb25zZTtcbiAgICB9KTtcbiAgICBcbiAgfTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
