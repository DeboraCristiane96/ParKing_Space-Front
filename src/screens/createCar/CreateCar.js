import React from 'react';
import './CreateCar.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

class CreateCar extends React.Component {

  state = {
    model: "",
    year: "",
    licensePlate: "",
    carColor: ""
    
  }

  create = async () => {
    await axios.post('http://localhost:8080/api/car',
     
    ).then(response => {
      console.log(response);
    }
    ).catch(error => {
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

              <div className="card text-white bg-info mb-3" style={this.styles.cardText}>
                <h3 className="card-header text-center">Cadastro dos Dados do Carro</h3>
                <div className="card-body">

                  <div className='row'>
                    <div className='col-lg-12' >
                      <div className='bs-component'>

                        <div className="form-group">
                          <label className="col-form-label mt-4" htmlFor="inputModel">Modelo:</label>
                          <input type="text" className="form-control" placeholder="Qual o modelo:" id="inputName" value={this.state.model} onChange={(e) => { this.setState({ model: e.target.value }) }} />

                          <div className="form-group">
                          <label className="col-form-label mt-4" htmlFor="inputLastYear">Ano:</label>
                          <input type="text" className="form-control" placeholder="Qual o ano:" id="inputLastyear" value={this.state.year} onChange={(e) => { this.setState({ year: e.target.value }) }} />
                          </div>

                          <div className="form-group">
                          <label className="col-form-label mt-4" htmlFor="inputLicensePlate">Placa:</label>
                          <input type="text" className="form-control" placeholder="Qual a placa:" id="inputlicensePlate" value={this.state.licensePlate} onChange={(e) => { this.setState({ licensePlate: e.target.value }) }} />
                          </div>

                          <div className="form-group">
                            <label className="col-form-label mt-4" htmlFor="inputCarColor">Cor:</label>
                            <input type="text" className="form-control" placeholder="Qual a cor do carro" id="inputCarcolor" value={this.state.carColor} onChange={(e) => { this.setState({ carColor: e.target.value }) }} />
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
      </div>
    );
  }

  styles = {
    colMd12: {
      position: 'relative'
    },
    cardText: {
      outerWidth: '20rem',
      margin: '50px 0 0 0'
    }
  }
}

export default withRouter(CreateCar);