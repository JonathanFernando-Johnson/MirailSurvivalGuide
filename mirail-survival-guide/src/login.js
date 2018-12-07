import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return <div className="Login">Bienvenue
      <div>
        <TextField
          label="Utilisateur"
          placeholder="Utilisateur"
          onChange = {(event,newValue) => this.setState({username:newValue})}
        />
        <br />
        <TextField
           type="password"
           label="Mot de passe"
           placeholder="Mot de passe"
           onChange = {(event,newValue) => this.setState({password:newValue})}
         />
         <br />
         <Button variant="contained" color="primary" className="connect">
            Connexion
         </Button>
         <br />
         Pas de compte ?
         <br />
         <Button variant="contained" color="primary" className="register">
            Inscription
         </Button>
      </div>
    </div>;
  }
}

export default Login;
