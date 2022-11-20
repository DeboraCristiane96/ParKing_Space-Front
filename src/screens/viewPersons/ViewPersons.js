import React from 'react';
import './ViewPerson.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

import PersonsTable from '../../components/PersonTable'

class ViewPersons extends React.Component {

    state = {
        id: '',
        name: '',
        persons: []
    }

    delete = (personsId) => {
        axios.delete(`http://localhost:8080/api/person/${personsId}`,
        ).then(response => {
            this.find();
        }
        ).catch(error => {
            console.log(error.response);
        }
        );
    }

    edit = (id) => {
        this.props.history.push(`/updatePerson/${id}`);
    }

    find = () => {
        var params = '?';

        if (this.state.id !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}id=${this.state.id}`;
        }

        if (this.state.name !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}name=${this.state.name}`;
        }

        axios.get(`http://localhost:8080/api/person/${params}`)
            .then(response => {
                const persons = response.data;
                this.setState({ persons });
                console.log(persons);
            }
            ).catch(error => {
                console.log(error.response);
            }
            );
    }

    render() {
        return (

            <div className="container">
                <div className='row'>
                    <div className='col-md-12' style={this.styles.colMd12}>
                        <div className="bs-docs-section">

                            <div className="card border-primary mb-3" style={this.styles.cardBorder}>
                                <h3 className="card-header text-center">Consulta de Usuário</h3>
                                <div className="card-body">

                                    <div className="form-group">
                                        <label className="form-label mt-4">Código:</label>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="inputCode" placeholder="Digite o Código do Usuário" value={this.state.code} onChange={(e) => { this.setState({ code: e.target.value }) }} />
                                            <label htmlFor="inputId">Digite o Código do usuário</label>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label mt-4">Nome:</label>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="inputName" placeholder="Digite o Nome do usuário" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                                                <label htmlFor="inputName">Digite o Nome do Usuário</label>
                                            </div>

                                            <button onClick={this.find} type="button" className="btn btn-success">
                                                <i className="pi pi-search"></i> Buscar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <br />
                                <div className='row'>
                                    <div className='col-lg-12' >
                                        <div className='bs-component'>
                                            <PersonsTable departments={this.state.departments}
                                                delete={this.delete}
                                                edit={this.edit} />
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div>
            </div>
        )
    }
    styles = {
        colMd12: {
            position: 'relative'
        },
        cardBorder: {
            outerWidth: '20rem',
            margin: '50px 0 0 0'
        }
    }
}

export default withRouter(ViewPersons);