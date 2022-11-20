import React from 'react';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

class UpdateCar extends React.Component {

  state = {
    id: 0,
    model: '',
    licensePlate:'',
    year:'',
    carColor:''

  }

  update = () => {
    axios.put(`http://localhost:8080/api/car/${this.state.id}`,
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
                <h3 className="card-header text-center">Atualização dos Dados do Carro</h3>
                <div className="card-body">

                  <div className='row'>huya\
                    <div className='col-lg-12' >
                      <div className='bs-component'>

                        <div className="form-group">
                          <label className="form-label mt-4">Id:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputCode" placeholder="Digite o código do carro:" value={this.state.id} onChange={(e) => { this.setState({ id: e.target.value }) }} />
                            <label htmlFor="inputId">Digite o código do Carro</label>
                        </div>

                        <div className="form-group">
                          <label className="form-label mt-4">Modelo:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputmodel" placeholder="Digite o modelo:" value={this.state.model} onChange={(e) => { this.setState({ model: e.target.value }) }} />
                            <label htmlFor="inputmodel">Digite o modelo</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputlicensePlate" placeholder="Digite a placa:" value={this.state.licensePlate} onChange={(e) => { this.setState({ licensePlate: e.target.value }) }} />
                            <label htmlFor="inputlicensePlate">Digite a placa</label>
                          </div>
                        
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputYear" placeholder="Digite o ano :" value={this.state.year} onChange={(e) => { this.setState({ year: e.target.value }) }} />
                            <label htmlFor="inputYear">Digite o ano</label>
                          </div>
                        
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputCarColor" placeholder="Digite a cor:" value={this.state.carColor} onChange={(e) => { this.setState({ carColor: e.target.value }) }} />
                            <label htmlFor="inputCarColor">Digite a cor</label>
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

export default withRouter(UpdateCar);