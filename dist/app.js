System.register(['bootstrap', 'bootstrap/css/bootstrap.css!', 'aurelia-framework', 'aurelia-router', 'paulvanbladel/aureliauth/app.httpClient.config', 'router-config'], function (_export) {
  'use strict';

  var inject, Router, HttpClientConfig, AppRouterConfig, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_paulvanbladelAureliauthAppHttpClientConfig) {
      HttpClientConfig = _paulvanbladelAureliauthAppHttpClientConfig['default'];
    }, function (_routerConfig) {
      AppRouterConfig = _routerConfig['default'];
    }],
    execute: function () {
      App = (function () {
        function App(router, httpClientConfig, appRouterConfig) {
          _classCallCheck(this, _App);

          this.router = router;

          this.httpClientConfig = httpClientConfig;

          this.appRouterConfig = appRouterConfig;
        }

        _createClass(App, [{
          key: 'activate',
          value: function activate() {
            this.httpClientConfig.configure();
            this.appRouterConfig.configure();
          }
        }]);

        var _App = App;
        App = inject(Router, HttpClientConfig, AppRouterConfig)(App) || App;
        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eURBYWEsR0FBRzs7Ozs7Ozs7aUNBVlIsTUFBTTs7OEJBQ04sTUFBTTs7Ozs7OztBQVNELFNBQUc7QUFFSCxpQkFGQSxHQUFHLENBRUYsTUFBTSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRTs7O0FBRXJELGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUdyQixjQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7O0FBSXpDLGNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1NBQ3hDOztxQkFaVSxHQUFHOztpQkFjTixvQkFBRztBQUdULGdCQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbEMsZ0JBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUM7V0FFbEM7OzttQkFwQlUsR0FBRztBQUFILFdBQUcsR0FGZixNQUFNLENBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUVyQyxHQUFHLEtBQUgsR0FBRztlQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5jc3MhJztcblxuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQgSHR0cENsaWVudENvbmZpZyBmcm9tICdwYXVsdmFuYmxhZGVsL2F1cmVsaWF1dGgvYXBwLmh0dHBDbGllbnQuY29uZmlnJztcbmltcG9ydCBBcHBSb3V0ZXJDb25maWcgZnJvbSAncm91dGVyLWNvbmZpZyc7XG5cbi8vIFVzaW5nIEF1cmVsaWEncyBkZXBlbmRlbmN5IGluamVjdGlvbiwgd2UgaW5qZWN0IEF1cmVsaWEncyByb3V0ZXIsXG4vLyB0aGUgYXVyZWxpYS1hdXRoIGh0dHAgY2xpZW50IGNvbmZpZywgYW5kIG91ciBvd24gcm91dGVyIGNvbmZpZ1xuLy8gd2l0aCB0aGUgQGluamVjdCBkZWNvcmF0b3JcbkBpbmplY3QoUm91dGVyLCBIdHRwQ2xpZW50Q29uZmlnLCBBcHBSb3V0ZXJDb25maWcpXG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlciwgaHR0cENsaWVudENvbmZpZywgYXBwUm91dGVyQ29uZmlnKSB7XG4gICAgXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG5cbiAgICAvLyBDbGllbnQgY29uZmlndXJhdGlvbiBwcm92aWRlZCBieSB0aGUgYXVyZWxpYXV0aCBwbHVnaW5cbiAgICB0aGlzLmh0dHBDbGllbnRDb25maWcgPSBodHRwQ2xpZW50Q29uZmlnO1xuXG4gICAgLy8gVGhlIGFwcGxpY2F0aW9uJ3MgY29uZmlndXJhdGlvbiwgaW5jbHVkaW5nIHRoZVxuICAgIC8vIHJvdXRlIGRlZmluaXRpb25zIHRoYXQgd2UndmUgZGVjbGFyZWQgaW4gcm91dGVyLWNvbmZpZy5qc1xuICAgIHRoaXMuYXBwUm91dGVyQ29uZmlnID0gYXBwUm91dGVyQ29uZmlnO1xuICB9O1xuICBcbiAgYWN0aXZhdGUoKSB7XG4gICAgXG4gICAgLy8gSGVyZSB3ZSBydW4gdGhlIGNvbmZpZ3VyYXRpb24gd2hlbiB0aGUgYXBwIGxvYWRzXG4gICAgdGhpcy5odHRwQ2xpZW50Q29uZmlnLmNvbmZpZ3VyZSgpO1xuICAgIHRoaXMuYXBwUm91dGVyQ29uZmlnLmNvbmZpZ3VyZSgpO1xuXG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
