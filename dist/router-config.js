System.register(['paulvanbladel/aureliauth', 'aurelia-framework', 'aurelia-router'], function (_export) {
  'use strict';

  var AuthorizeStep, inject, Router, _default;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_paulvanbladelAureliauth) {
      AuthorizeStep = _paulvanbladelAureliauth.AuthorizeStep;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _default = (function () {
        function _default(router) {
          _classCallCheck(this, _default2);

          this.router = router;
        }

        _createClass(_default, [{
          key: 'configure',
          value: function configure() {

            var appRouterConfig = function appRouterConfig(config) {

              config.title = 'Control';

              config.addPipelineStep('authorize', AuthorizeStep);

              config.map([{ route: ['', 'mainMenu'], name: 'mainMenu', moduleId: './mainMenu/mainMenu', nav: true, title: 'Main Menu' }, { route: 'login', name: 'login', moduleId: './login/login', nav: false, title: 'Login', authRoute: true }, { route: 'logout', name: 'logout', moduleId: './logout/logout', nav: false, title: 'Logout', authRoute: true }]);
            };

            this.router.configure(appRouterConfig);
          }
        }]);

        var _default2 = _default;
        _default = inject(Router)(_default) || _default;
        return _default;
      })();

      _export('default', _default);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci1jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7K0NBQVEsYUFBYTs7aUNBQ2IsTUFBTTs7OEJBQ04sTUFBTTs7OztBQVFELDBCQUFDLE1BQU0sRUFBRTs7O0FBQ2xCLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCOzs7O2lCQUVRLHFCQUFHOztBQUVWLGdCQUFJLGVBQWUsR0FBRyxTQUFsQixlQUFlLENBQVksTUFBTSxFQUFFOztBQUVyQyxvQkFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7O0FBS3pCLG9CQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQzs7QUFLbkQsb0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FFUCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxXQUFXLEVBQUUsRUFPM0csRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUN4RyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FDOUcsQ0FBQyxDQUFDO2FBQ0osQ0FBQzs7QUFHSixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7V0FFeEM7Ozs7bUJBdkNGLE1BQU0sQ0FBQyxNQUFNLENBQUMiLCJmaWxlIjoicm91dGVyLWNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXV0aG9yaXplU3RlcH0gZnJvbSAncGF1bHZhbmJsYWRlbC9hdXJlbGlhdXRoJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuXG4vLyBVc2luZyBBdXJlbGlhJ3MgZGVwZW5kZW5jeSBpbmplY3Rpb24sIHdlIGluamVjdCBSb3V0ZXJcbi8vIHdpdGggdGhlIEBpbmplY3QgZGVjb3JhdG9yXG5AaW5qZWN0KFJvdXRlcilcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlcikge1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9O1xuXG4gIGNvbmZpZ3VyZSgpIHtcblxuICAgIHZhciBhcHBSb3V0ZXJDb25maWcgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICAgIFxuICAgICAgY29uZmlnLnRpdGxlID0gJ0NvbnRyb2wnO1xuXG4gICAgICAvLyBIZXJlIHdlIGhvb2sgaW50byB0aGUgYXV0aG9yaXplIGV4dGVuc2liaWxpdHkgcG9pbnRcbiAgICAgIC8vIHRvIGFkZCBhIHJvdXRlIGZpbHRlciBzbyB0aGF0IHdlIGNhbiByZXF1aXJlIGF1dGhlbnRpY2F0aW9uXG4gICAgICAvLyBvbiBjZXJ0YWluIHJvdXRlc1xuICAgICAgY29uZmlnLmFkZFBpcGVsaW5lU3RlcCgnYXV0aG9yaXplJywgQXV0aG9yaXplU3RlcCk7XG5cbiAgICAgIC8vIEhlcmUgd2UgZGVzY3JpYmUgdGhlIHJvdXRlcyB3ZSB3YW50IGFsb25nIHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlbVxuICAgICAgLy8gc3VjaCBhcyB3aGljaCB0aGV5IGFyZSBhY2Nlc3NpYmxlIGF0LCB3aGljaCBtb2R1bGUgdGhleSB1c2UsIGFuZCB3aGV0aGVyXG4gICAgICAvLyB0aGV5IHNob3VsZCBiZSBwbGFjZWQgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAgICBjb25maWcubWFwKFtcbiAgICAgICAgICAvL3sgcm91dGU6IFsnJywnd2VsY29tZSddLCBuYW1lOiAnd2VsY29tZScsIG1vZHVsZUlkOiAnLi93ZWxjb21lJywgbmF2OiB0cnVlLCB0aXRsZTonV2VsY29tZScgfSxcbiAgICAgICAgICB7IHJvdXRlOiBbJycsJ21haW5NZW51J10sIG5hbWU6ICdtYWluTWVudScsIG1vZHVsZUlkOiAnLi9tYWluTWVudS9tYWluTWVudScsIG5hdjogdHJ1ZSwgdGl0bGU6J01haW4gTWVudScgfSxcbiAgICAgICAgICBcbiAgICAgICAgICAvL3sgcm91dGU6ICd0ZXN0JywgbmFtZTogJ3Rlc3QnLCBtb2R1bGVJZDogJy4vdGVzdC90ZXN0JywgbmF2OiB0cnVlLCB0aXRsZTondGVzdCcgLCBhdXRoUm91dGU6IHRydWV9LFxuICAgICAgICAgIC8veyByb3V0ZTogJ3JhbmRvbS1xdW90ZScsIG5hbWU6ICdyYW5kb20tcXVvdGUnLCBtb2R1bGVJZDogJy4vcmFuZG9tLXF1b3RlJywgbmF2OiB0cnVlLCB0aXRsZTonUmFuZG9tIFF1b3RlJyB9LCAgICAgICAgICBcbiAgICAgICAgICAvLyBUaGUgc2VjcmV0LXF1b3RlIHJvdXRlIGlzIHRoZSBvbmx5IG9uZSB0aGF0IHRoZSB1c2VyIG5lZWRzIHRvIGJlIGxvZ2dlZCBpbiB0byBzZWUsICBzbyB3ZSBzZXQgYXV0aDogdHJ1ZVxuICAgICAgICAgIC8veyByb3V0ZTogJ3NlY3JldC1xdW90ZScsIG5hbWU6ICdzZWNyZXQtcXVvdGUnLCBtb2R1bGVJZDogJy4vc2VjcmV0LXF1b3RlJywgbmF2OiB0cnVlLCB0aXRsZTonU3VwZXIgU2VjcmV0IFF1b3RlJywgYXV0aDogdHJ1ZSB9LFxuICAgICAgICAgIC8veyByb3V0ZTogJ3NpZ251cCcsIG5hbWU6ICdzaWdudXAnLCBtb2R1bGVJZDogJy4vc2lnbnVwL3NpZ251cCcsIG5hdjogZmFsc2UsIHRpdGxlOidTaWdudXAnLCBhdXRoUm91dGU6IGZhbHNlLCBhdXRoOnRydWUgfSxcbiAgICAgICAgICB7IHJvdXRlOiAnbG9naW4nLCBuYW1lOiAnbG9naW4nLCBtb2R1bGVJZDogJy4vbG9naW4vbG9naW4nLCBuYXY6IGZhbHNlLCB0aXRsZTonTG9naW4nLCBhdXRoUm91dGU6IHRydWUgfSxcbiAgICAgICAgICB7IHJvdXRlOiAnbG9nb3V0JywgbmFtZTogJ2xvZ291dCcsIG1vZHVsZUlkOiAnLi9sb2dvdXQvbG9nb3V0JywgbmF2OiBmYWxzZSwgdGl0bGU6J0xvZ291dCcsIGF1dGhSb3V0ZTogdHJ1ZSB9XG4gICAgICAgIF0pO1xuICAgICAgfTtcblxuICAgIC8vIFRoZSByb3V0ZXIgaXMgY29uZmlndXJlZCB3aXRoIHdoYXQgd2Ugc3BlY2lmeSBpbiB0aGUgYXBwUm91dGVyQ29uZmlnXG4gICAgdGhpcy5yb3V0ZXIuY29uZmlndXJlKGFwcFJvdXRlckNvbmZpZyk7XG5cbiAgfTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
