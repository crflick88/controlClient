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

              config.map([{ route: ['', 'mainMenu'], name: 'mainMenu', moduleId: './mainMenu/mainMenu', nav: true, title: 'Main Menu' }, { route: 'signup', name: 'signup', moduleId: './signup/signup', nav: false, title: 'Signup', authRoute: true }, { route: 'login', name: 'login', moduleId: './login/login', nav: false, title: 'Login', authRoute: true }, { route: 'logout', name: 'logout', moduleId: './logout/logout', nav: false, title: 'Logout', authRoute: true }]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci1jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7K0NBQVEsYUFBYTs7aUNBQ2IsTUFBTTs7OEJBQ04sTUFBTTs7OztBQVFELDBCQUFDLE1BQU0sRUFBRTs7O0FBQ2xCLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCOzs7O2lCQUVRLHFCQUFHOztBQUVWLGdCQUFJLGVBQWUsR0FBRyxTQUFsQixlQUFlLENBQVksTUFBTSxFQUFFOztBQUVyQyxvQkFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7O0FBS3pCLG9CQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQzs7QUFLbkQsb0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FFUCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxXQUFXLEVBQUUsRUFNM0csRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQzdHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFDeEcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQzlHLENBQUMsQ0FBQzthQUNKLENBQUM7O0FBR0osZ0JBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1dBRXhDOzs7O21CQXZDRixNQUFNLENBQUMsTUFBTSxDQUFDIiwiZmlsZSI6InJvdXRlci1jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dGhvcml6ZVN0ZXB9IGZyb20gJ3BhdWx2YW5ibGFkZWwvYXVyZWxpYXV0aCc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuLy8gVXNpbmcgQXVyZWxpYSdzIGRlcGVuZGVuY3kgaW5qZWN0aW9uLCB3ZSBpbmplY3QgUm91dGVyXG4vLyB3aXRoIHRoZSBAaW5qZWN0IGRlY29yYXRvclxuQGluamVjdChSb3V0ZXIpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICBjb25zdHJ1Y3Rvcihyb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfTtcblxuICBjb25maWd1cmUoKSB7XG5cbiAgICB2YXIgYXBwUm91dGVyQ29uZmlnID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICBcbiAgICAgIGNvbmZpZy50aXRsZSA9ICdDb250cm9sJztcblxuICAgICAgLy8gSGVyZSB3ZSBob29rIGludG8gdGhlIGF1dGhvcml6ZSBleHRlbnNpYmlsaXR5IHBvaW50XG4gICAgICAvLyB0byBhZGQgYSByb3V0ZSBmaWx0ZXIgc28gdGhhdCB3ZSBjYW4gcmVxdWlyZSBhdXRoZW50aWNhdGlvblxuICAgICAgLy8gb24gY2VydGFpbiByb3V0ZXNcbiAgICAgIGNvbmZpZy5hZGRQaXBlbGluZVN0ZXAoJ2F1dGhvcml6ZScsIEF1dGhvcml6ZVN0ZXApO1xuXG4gICAgICAvLyBIZXJlIHdlIGRlc2NyaWJlIHRoZSByb3V0ZXMgd2Ugd2FudCBhbG9uZyB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZW1cbiAgICAgIC8vIHN1Y2ggYXMgd2hpY2ggdGhleSBhcmUgYWNjZXNzaWJsZSBhdCwgd2hpY2ggbW9kdWxlIHRoZXkgdXNlLCBhbmQgd2hldGhlclxuICAgICAgLy8gdGhleSBzaG91bGQgYmUgcGxhY2VkIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgICAgY29uZmlnLm1hcChbXG4gICAgICAgICAgLy97IHJvdXRlOiBbJycsJ3dlbGNvbWUnXSwgbmFtZTogJ3dlbGNvbWUnLCBtb2R1bGVJZDogJy4vd2VsY29tZScsIG5hdjogdHJ1ZSwgdGl0bGU6J1dlbGNvbWUnIH0sXG4gICAgICAgICAgeyByb3V0ZTogWycnLCdtYWluTWVudSddLCBuYW1lOiAnbWFpbk1lbnUnLCBtb2R1bGVJZDogJy4vbWFpbk1lbnUvbWFpbk1lbnUnLCBuYXY6IHRydWUsIHRpdGxlOidNYWluIE1lbnUnIH0sXG4gICAgICAgICAgXG4gICAgICAgICAgLy97IHJvdXRlOiAndGVzdCcsIG5hbWU6ICd0ZXN0JywgbW9kdWxlSWQ6ICcuL3Rlc3QvdGVzdCcsIG5hdjogdHJ1ZSwgdGl0bGU6J3Rlc3QnICwgYXV0aFJvdXRlOiB0cnVlfSxcbiAgICAgICAgICAvL3sgcm91dGU6ICdyYW5kb20tcXVvdGUnLCBuYW1lOiAncmFuZG9tLXF1b3RlJywgbW9kdWxlSWQ6ICcuL3JhbmRvbS1xdW90ZScsIG5hdjogdHJ1ZSwgdGl0bGU6J1JhbmRvbSBRdW90ZScgfSwgICAgICAgICAgXG4gICAgICAgICAgLy8gVGhlIHNlY3JldC1xdW90ZSByb3V0ZSBpcyB0aGUgb25seSBvbmUgdGhhdCB0aGUgdXNlciBuZWVkcyB0byBiZSBsb2dnZWQgaW4gdG8gc2VlLCAgc28gd2Ugc2V0IGF1dGg6IHRydWVcbiAgICAgICAgICAvL3sgcm91dGU6ICdzZWNyZXQtcXVvdGUnLCBuYW1lOiAnc2VjcmV0LXF1b3RlJywgbW9kdWxlSWQ6ICcuL3NlY3JldC1xdW90ZScsIG5hdjogdHJ1ZSwgdGl0bGU6J1N1cGVyIFNlY3JldCBRdW90ZScsIGF1dGg6IHRydWUgfSxcbiAgICAgICAgICB7IHJvdXRlOiAnc2lnbnVwJywgbmFtZTogJ3NpZ251cCcsIG1vZHVsZUlkOiAnLi9zaWdudXAvc2lnbnVwJywgbmF2OiBmYWxzZSwgdGl0bGU6J1NpZ251cCcsIGF1dGhSb3V0ZTogdHJ1ZSB9LFxuICAgICAgICAgIHsgcm91dGU6ICdsb2dpbicsIG5hbWU6ICdsb2dpbicsIG1vZHVsZUlkOiAnLi9sb2dpbi9sb2dpbicsIG5hdjogZmFsc2UsIHRpdGxlOidMb2dpbicsIGF1dGhSb3V0ZTogdHJ1ZSB9LFxuICAgICAgICAgIHsgcm91dGU6ICdsb2dvdXQnLCBuYW1lOiAnbG9nb3V0JywgbW9kdWxlSWQ6ICcuL2xvZ291dC9sb2dvdXQnLCBuYXY6IGZhbHNlLCB0aXRsZTonTG9nb3V0JywgYXV0aFJvdXRlOiB0cnVlIH1cbiAgICAgICAgXSk7XG4gICAgICB9O1xuXG4gICAgLy8gVGhlIHJvdXRlciBpcyBjb25maWd1cmVkIHdpdGggd2hhdCB3ZSBzcGVjaWZ5IGluIHRoZSBhcHBSb3V0ZXJDb25maWdcbiAgICB0aGlzLnJvdXRlci5jb25maWd1cmUoYXBwUm91dGVyQ29uZmlnKTtcblxuICB9O1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
