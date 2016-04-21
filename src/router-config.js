import {AuthorizeStep} from 'paulvanbladel/aureliauth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

// Using Aurelia's dependency injection, we inject Router
// with the @inject decorator
@inject(Router)

export default class {

  constructor(router) {
    this.router = router;
  };

  configure() {

    var appRouterConfig = function(config) {
      
      config.title = 'Control';

      // Here we hook into the authorize extensibility point
      // to add a route filter so that we can require authentication
      // on certain routes
      config.addPipelineStep('authorize', AuthorizeStep);

      // Here we describe the routes we want along with information about them
      // such as which they are accessible at, which module they use, and whether
      // they should be placed in the navigation bar
      config.map([
          //{ route: ['','welcome'], name: 'welcome', moduleId: './welcome', nav: true, title:'Welcome' },
          { route: ['','mainMenu'], name: 'mainMenu', moduleId: './mainMenu/mainMenu', nav: true, title:'Main Menu' },
          
          //{ route: 'test', name: 'test', moduleId: './test/test', nav: true, title:'test' , authRoute: true},
          //{ route: 'random-quote', name: 'random-quote', moduleId: './random-quote', nav: true, title:'Random Quote' },          
          // The secret-quote route is the only one that the user needs to be logged in to see,  so we set auth: true
          //{ route: 'secret-quote', name: 'secret-quote', moduleId: './secret-quote', nav: true, title:'Super Secret Quote', auth: true },
          //{ route: 'signup', name: 'signup', moduleId: './signup/signup', nav: false, title:'Signup', authRoute: false, auth:true },
          { route: 'login', name: 'login', moduleId: './login/login', nav: false, title:'Login', authRoute: true },
          { route: 'logout', name: 'logout', moduleId: './logout/logout', nav: false, title:'Logout', authRoute: true }
        ]);
      };

    // The router is configured with what we specify in the appRouterConfig
    this.router.configure(appRouterConfig);

  };
}