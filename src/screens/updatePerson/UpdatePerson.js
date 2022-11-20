import React from 'react';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

class UpdatePerson extends React.Component {

  state = {
    id: 0,
    emai: '',
    password:''

  }

  update = () => {
    axios.put(`http://localhost:8080/api/person/${this.state.id}`,
      {
        name: this.state.name
      }
    ).then(response => {
      console.log(response);
    }
    ).catch(error => {
      console.log(error.response);
    }
    );
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

              <div className="card border-primary mb-3" style={this.styles.cardBorder}>
                <h3 className="card-header text-center">Atualização dos Dados Pessoais</h3>
                <div className="card-body">

                  <div className='row'>huya\
                    <div className='col-lg-12' >
                      <div className='bs-component'>

                        <div className="form-group">
                          <label className="form-label mt-4">Id:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputCode" placeholder="Digite o código do usuário:" value={this.state.id} onChange={(e) => { this.setState({ id: e.target.value }) }} />
                            <label htmlFor="inputId">Digite o código do usuário</label>
                        </div>

                        <div className="form-group">
                          <label className="form-label mt-4">Email:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inpuemail" placeholder="Digite o email:" value={this.state.emai} onChange={(e) => { this.setState({ emai: e.target.value }) }} />
                            <label htmlFor="inputmodel">Digite o novo email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inpupassaword" placeholder="Digite a nova senha:" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <label htmlFor="inputlicensePlate">Digite a nova senha</label>
                          </div>
                    
                        <button onClick={this.update} type="button" className="btn btn-warning">
                          <i className="pi pi-save"></i> Atualizar
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
     </div>
     </div>
  );

    }
}

export default withRouter(UpdatePerson);