import React from 'react';
import './DeletePerson.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

class DeletePerson extends React.Component {

  state = {
    id: 0
  }

  delete = () => {
    axios.delete(`http://localhost:8080/api/person/${this.state.id}`,
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

              <div className="card border-primary mb-3" style={this.styles.cardBorder}>
                <h3 className="card-header text-center">Excluindo os Dados do Pessoais</h3>
                <div className="card-body">

                  <div className='row'>
                    <div className='col-lg-12' >
                      <div className='bs-component'>

                        <div className="form-group">
                          <label className="form-label mt-4">Id:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputCode" placeholder="Digite o código Usuário:" value={this.state.id} onChange={(e) => { this.setState({ id: e.target.value }) }} />
                            <label htmlFor="inputId">Digite o código do usuário</label>
                          </div>
                        </div>

                        <br />

                        <button onClick={this.delete} type="button" className="btn btn-outline-danger">
                            <i className="primary"></i> Deletar
                        </button>
                        <button onClick={this.cancel} type="button" className="btn btn-outline-info">
                            <i className="danger"></i> Cancelar
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
      position: 'relative',
    },
    cardBorder: {
      outerWidth: '20rem',
      margin: '50px 0 0 0'
    }
  }
}

export default withRouter(DeletePerson);