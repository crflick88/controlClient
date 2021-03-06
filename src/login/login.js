import {AuthService} from 'paulvanbladel/aureliauth';
import {inject} from 'aurelia-framework';

@inject(AuthService)

export class Login {
  
  heading = 'Login';

  // User inputs will be bound to these view models
  // and when submitting the form for login  
  //email = '';
  username = '';
  password = '';

  // This view model will be given an error value
  // if anything goes wrong with the login
  loginError = '';
    
  constructor(auth) {
    this.auth = auth;
  };

  login() {
      console.log("username: "+this.username);
      
      console.log("password: "+this.password);
      
      
    return this.auth.login(this.username, this.password)
    .then(response => {
      //console.log("Login response content: " + response.content);
      //console.log("Login response token: " + response.content.id_token);
      //console.log("Login response token: " + response.content.id_token.payload);
      console.log("respuestaaaaa");
    })
    .catch(error => {
      this.loginError = error.response;
    });
  };
}