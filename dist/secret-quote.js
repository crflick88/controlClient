System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, HttpClient, SecretQuote;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      SecretQuote = (function () {
        function SecretQuote(http) {
          _classCallCheck(this, _SecretQuote);

          this.heading = 'Super Secret Quote';
          this.secretQuote = '';

          this.http = http;
        }

        _createClass(SecretQuote, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.get('http://localhost:3001/api/protected/random-quote').then(function (response) {
              _this.secretQuote = response.content;
            })['catch'](function (error) {
              console.log('Error getting quote');
            });
          }
        }]);

        var _SecretQuote = SecretQuote;
        SecretQuote = inject(HttpClient)(SecretQuote) || SecretQuote;
        return SecretQuote;
      })();

      _export('SecretQuote', SecretQuote);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3JldC1xdW90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MEJBT2EsV0FBVzs7Ozs7Ozs7aUNBUGhCLE1BQU07O3NDQUNOLFVBQVU7OztBQU1MLGlCQUFXO0FBU1gsaUJBVEEsV0FBVyxDQVNWLElBQUksRUFBRTs7O2VBUGxCLE9BQU8sR0FBRyxvQkFBb0I7ZUFLOUIsV0FBVyxHQUFHLEVBQUU7O0FBR2QsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3FCQVhVLFdBQVc7O2lCQWFkLG9CQUFHOzs7QUFDVCxtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUN2RSxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsb0JBQUssV0FBVyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDckMsQ0FBQyxTQUFNLENBQUMsVUFBQSxLQUFLLEVBQUk7QUFDaEIscUJBQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUNwQyxDQUFDLENBQUM7V0FDSjs7OzJCQXBCVSxXQUFXO0FBQVgsbUJBQVcsR0FGdkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUVOLFdBQVcsS0FBWCxXQUFXO2VBQVgsV0FBVyIsImZpbGUiOiJzZWNyZXQtcXVvdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcblxuLy8gVXNpbmcgQXVyZWxpYSdzIGRlcGVuZGVuY3kgaW5qZWN0aW9uLCB3ZSBpbmplY3QgSHR0cENsaWVudFxuLy8gd2l0aCB0aGUgQGluamVjdCBkZWNvcmF0b3IgdG8gbWFrZSBIVFRQIHJlcXVlc3RzXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5cbmV4cG9ydCBjbGFzcyBTZWNyZXRRdW90ZSB7XG5cbiAgaGVhZGluZyA9ICdTdXBlciBTZWNyZXQgUXVvdGUnO1xuXG4gIC8vIFZpZXcgbW9kZWwgdGhhdCB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIHRoZSBcbiAgLy8gdGhlIHNlY3JldCBxdW90ZSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIGFuZFxuICAvLyBkaXNwbGF5ZWQgaW4gdGhlIHZpZXdcbiAgc2VjcmV0UXVvdGUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihodHRwKSB7XG4gICAgdGhpcy5odHRwID0gaHR0cDtcbiAgfTtcblxuICBhY3RpdmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9wcm90ZWN0ZWQvcmFuZG9tLXF1b3RlJylcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNlY3JldFF1b3RlID0gcmVzcG9uc2UuY29udGVudDtcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZ2V0dGluZyBxdW90ZScpO1xuICAgIH0pO1xuICB9O1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
