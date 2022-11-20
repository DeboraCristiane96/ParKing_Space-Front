import React from "react";
import './Login.css'
import 'bootswatch/dist/vapor/bootstrap.css';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../main/SessionProvider';


class Login extends React.Component{
        
    state = {
        email:'',
        password:''
    }
    login = () => {
        this.context.login(
            this.state.username,
            this.state.password
        ).then(user => 
            {
                if (user) {
                    console.log("If");
                    showSuccessMessage(`${user.username}, você está logado!`);
                    this.props.history.push('/viewPersons');
        
                } else {
                    console.log(user.username);
                    console.log("Else");
                    showErrorMessage("Dados incorretos! Login inválido");
                }

            }
        ).catch(error => 
            {
                console.log("Catch");
                showErrorMessage('Erro! processando autenticação:', error);
            }
        );
    }

    create = () => {
        this.props.history.push('/createPerson');
    }

    render() {
    
        return(
            <div className="container">
                <div className="container-registration">
                    <div className="wrap-registration">
                        <h3 className="header">Login</h3>
                        <div className="card-body">
                            <div className="component">
                                <fieldset>
                                    <div className="form-group">
                                        <label htmlfor="inputEmail" className="form-label mt-4">Email: *</label>
                                        <input type="email" className="form-control" id="inputEmail" 
                                         aria-describedby="emailHelp"placeholder="Digite o Email" 
                                         value={this.state.email} onChange = {(e) => this.setState({email:e.target.value})}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlfor="inputPassword1" className="form-label mt-4">Senha: * </label>
                                            <input type="password" className="form-control" id="inputPassword" placeholder="Digite a senha" value={this.state.password} onChange = {(e) => this.setState({password:e.target.value})}/>
                                     </div>
                                </fieldset>
                                <div>
                                    <button type="button" class="btn btn-success"onClick={this.login}>Entrar</button>
                                    <button type="button" class="btn btn-dark"onClick={this.createPerson} >Cadastrar</button>
                                </div>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Login.contextType = AuthContext;
export default withRouter(Login);