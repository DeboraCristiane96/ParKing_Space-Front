import React from 'react';
import NavBarItem from './NavBarItem'
import { AuthConsumer } from '../main/SessionProvider';

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto nav-items">
                        <a className="nav-link" href="/login">Login</a>
                        <NavBarItem render={props.isAuthenticated} href="/viewDepartaments" label="Departamentos" />
                        <NavBarItem render={props.isAuthenticated} href="/viewPersons" label="Usuários" />
                        <NavBarItem render={props.isAuthenticated} href="/login" label="Login" />
                        <NavBarItem render={props.isAuthenticated} href="/login" onClick={props.logout} label="Sair" />

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default () => (
    <AuthConsumer>
        {(context) => (
            <NavBar isAuthenticated={context.isAuthenticated} logout={context.end} />
        )}
    </AuthConsumer>
)
//Usa o AuthCostumer passar o contexto para o navVBar