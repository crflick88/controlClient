System.register(['aurelia-framework', 'paulvanbladel/aureliauth'], function (_export) {
  'use strict';

  var bindable, inject, AuthService, NavBar;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_paulvanbladelAureliauth) {
      AuthService = _paulvanbladelAureliauth.AuthService;
    }],
    execute: function () {
      NavBar = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(NavBar, [{
          key: 'router',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function NavBar(auth) {
          _classCallCheck(this, _NavBar);

          this._isAuthenticated = false;

          _defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

          this.auth = auth;
          this.userName = "Flick";
        }

        _createDecoratedClass(NavBar, [{
          key: 'isAuthenticated',
          get: function get() {
            return this.auth.isAuthenticated();
          }
        }, {
          key: 'isAdministrator',
          get: function get() {}
        }], null, _instanceInitializers);

        var _NavBar = NavBar;
        NavBar = inject(AuthService)(NavBar) || NavBar;
        return NavBar;
      })();

      _export('NavBar', NavBar);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIvbmF2LWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7cUNBTWEsTUFBTTs7Ozs7Ozs7OzttQ0FOWCxRQUFRO2lDQUNSLE1BQU07OzZDQUNOLFdBQVc7OztBQUlOLFlBQU07Ozs7OEJBQU4sTUFBTTs7dUJBR2hCLFFBQVE7O21CQUFVLElBQUk7Ozs7O0FBSVosaUJBUEEsTUFBTSxDQU9MLElBQUksRUFBRTs7O2VBTGxCLGdCQUFnQixHQUFHLEtBQUs7Ozs7QUFNdEIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLFFBQVEsR0FBQyxPQUFPLENBQUM7U0FDdkI7OzhCQVZVLE1BQU07O2VBY0UsZUFBRztBQUNwQixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1dBQ3BDOzs7ZUFFa0IsZUFBRSxFQUNwQjs7O3NCQW5CVSxNQUFNO0FBQU4sY0FBTSxHQUZsQixNQUFNLENBQUMsV0FBVyxDQUFDLENBRVAsTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNIiwiZmlsZSI6Im5hdi1iYXIvbmF2LWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICdwYXVsdmFuYmxhZGVsL2F1cmVsaWF1dGgnO1xuXG5AaW5qZWN0KEF1dGhTZXJ2aWNlKVxuXG5leHBvcnQgY2xhc3MgTmF2QmFyIHtcbiAgLy8gVXNlciBpc24ndCBhdXRoZW50aWNhdGVkIGJ5IGRlZmF1bHRcbiAgX2lzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICBAYmluZGFibGUgcm91dGVyID0gbnVsbDtcbiAgXG4gIFxuXG4gIGNvbnN0cnVjdG9yKGF1dGgpIHtcbiAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgIHRoaXMudXNlck5hbWU9XCJGbGlja1wiO1xuICB9O1xuXG4gIC8vIFdlIGNhbiBjaGVjayBpZiB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gIC8vIHRvIGNvbmRpdGlvbmFsbHkgaGlkZSBvciBzaG93IG5hdiBiYXIgaXRlbXNcbiAgZ2V0IGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoLmlzQXV0aGVudGljYXRlZCgpO1xuICB9O1xuICBcbiAgZ2V0IGlzQWRtaW5pc3RyYXRvcigpe1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
