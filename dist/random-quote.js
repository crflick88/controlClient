System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, HttpClient, RandomQuote;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      RandomQuote = (function () {
        function RandomQuote(http) {
          _classCallCheck(this, _RandomQuote);

          this.heading = 'Random Quote';
          this.randomQuote = '';

          this.http = http;
        }

        _createClass(RandomQuote, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.get('http://localhost:3001/api/random-quote').then(function (response) {
              _this.randomQuote = response.content;
            })['catch'](function (error) {
              console.log('Error getting quote');
            });
          }
        }]);

        var _RandomQuote = RandomQuote;
        RandomQuote = inject(HttpClient)(RandomQuote) || RandomQuote;
        return RandomQuote;
      })();

      _export('RandomQuote', RandomQuote);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmRvbS1xdW90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MEJBT2EsV0FBVzs7Ozs7Ozs7aUNBUGhCLE1BQU07O3NDQUNOLFVBQVU7OztBQU1MLGlCQUFXO0FBU1gsaUJBVEEsV0FBVyxDQVNWLElBQUksRUFBRTs7O2VBUGxCLE9BQU8sR0FBRyxjQUFjO2VBS3hCLFdBQVcsR0FBRyxFQUFFOztBQUdkLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOztxQkFYVSxXQUFXOztpQkFhZCxvQkFBRzs7O0FBQ1QsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FDN0QsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hCLG9CQUFLLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO2FBQ3JDLENBQUMsU0FBTSxDQUFDLFVBQUEsS0FBSyxFQUFJO0FBQ2hCLHFCQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDcEMsQ0FBQyxDQUFDO1dBQ0o7OzsyQkFwQlUsV0FBVztBQUFYLG1CQUFXLEdBRnZCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FFTixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVciLCJmaWxlIjoicmFuZG9tLXF1b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XG5cbi8vIFVzaW5nIEF1cmVsaWEncyBkZXBlbmRlbmN5IGluamVjdGlvbiwgd2UgaW5qZWN0IEh0dHBDbGllbnRcbi8vIHdpdGggdGhlIEBpbmplY3QgZGVjb3JhdG9yIHRvIG1ha2UgSFRUUCByZXF1ZXN0c1xuQGluamVjdChIdHRwQ2xpZW50KVxuXG5leHBvcnQgY2xhc3MgUmFuZG9tUXVvdGUge1xuXG4gIGhlYWRpbmcgPSAnUmFuZG9tIFF1b3RlJztcblxuICAvLyBWaWV3IG1vZGVsIHRoYXQgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCB0aGUgXG4gIC8vIHRoZSByYW5kb20gcXVvdGUgcmV0cmlldmVkIGZyb20gdGhlIEFQSSBhbmRcbiAgLy8gZGlzcGxheWVkIGluIHRoZSB2aWV3XG4gIHJhbmRvbVF1b3RlID0gJyc7XG5cbiAgY29uc3RydWN0b3IoaHR0cCkge1xuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gIH07XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvcmFuZG9tLXF1b3RlJylcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnJhbmRvbVF1b3RlID0gcmVzcG9uc2UuY29udGVudDtcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZ2V0dGluZyBxdW90ZScpO1xuICAgIH0pO1xuICB9O1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
