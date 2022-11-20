import React from 'react';
import './CreatePerson.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

class CreatePerson extends React.Component {

  state = {
    name: '',
    birthDate: "",
    email: "",
    phoneNumber: "",
    apartmentNumber: "",
    block:"",
    password:""

  }

  create = async () => {
    await axios.post('http://localhost:8080/api/person',
      {
        name: this.state.name
      }
    ).then(response => 
      {
        console.log(response);
      }
    ).catch(error => 
      {
        console.log(error.response);
      }
    );

    console.log('request finished');
  }

  cancel = () => {
    this.props.history.push('/');
  }

  render() {
    return (

      <div className="container">
        <div className='row'>
          <div className='col-md-12' style={this.styles.colMd12}>
            <div className="bs-docs-section">

              <div className="card border-success mb-3" style={this.styles.cardBorder}>
                <h3 className="card-header text-center">Cadastro dos Dados Pessoais</h3>
                <div className="card-body">

                  <div className='row'>
                    <div className='col-lg-12' >
                      <div className='bs-component'>

                        <div className="form-group">
                          <label className="form-label mt-4">Nome:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputName" placeholder="Digite o Nome " value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                            <label htmlFor="inputCategoryName">Digite o Nome </label>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <label className="form-label mt-4">Data de Nascimento:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputBirthDate" placeholder="Digite data de nascimento" value={this.state.birthDate} onChange={(e) => { this.setState({ birthDate: e.target.value }) }} />
                            <label htmlFor="inputCategoryName">Digite a tada de nascimento </label>
                          </div>
                        </div>
                        <br />

                        <div className="form-group">
                          <label className="form-label mt-4">Email:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputEmail" placeholder="Digite o Email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            <label htmlFor="inputCategoryName">Digite o Email </label>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <label className="form-label mt-4">Nº do Apartamento:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputApartamentNumber" placeholder="Digite o Nº do apartamento" value={this.state.apartmentNumber} onChange={(e) => { this.setState({ apartmentNumber: e.target.value }) }} />
                            <label htmlFor="inputCategoryName">Digite o nº do apartamento </label>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <label className="form-label mt-4">Bloco:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputBlock" placeholder="Digite o bloco" value={this.state.block} onChange={(e) => { this.setState({ block: e.target.value }) }} />
                            <label htmlFor="inputCategoryName">Digite o bloco </label>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <label className="form-label mt-4">senha:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputPassword" placeholder="Digite uma senha" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <label htmlFor="inputCategoryName">Digite uma senha </label>
                          </div>
                        </div>
                        <br />

                        <button onClick={this.create} type="button" className="btn btn-success">
                          <i className="pi pi-save"></i> Salvar
                        </button>
                        <button onClick={this.cancel} type="button" className="btn btn-danger">
                          <i className="pi pi-times"></i> Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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

export default withRouter(CreatePerson);