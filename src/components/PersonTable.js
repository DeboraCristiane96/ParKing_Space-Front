import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const rows = props.person.map(person => {
        return (
            <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.lastName}</td>
                <td>
                    <button type="button" title="Editar"
                        className="btn btn-warning"
                        onClick={e => props.edit(person.id)}>
                        <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button" title="Excluir"
                        className="btn btn-danger"
                        onClick={e => props.delete(person.id)}>
                        <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    } )

    return (

        <table className="table table-hover">
            <thead>
                <tr className="table-active">
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}