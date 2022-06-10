import React from 'react'

const Table = () => {

    const cars = [
        {
            carName: 'Malibu',
            carPrice: 25000
        },
        {
            carName: 'A7',
            carPrice: 35000
        },
        {
            carName: 'm7',
            carPrice: 75000
        },
        {
            carName: 'Cobalt',
            carPrice: 15000
        },
        {
            carName: 'BMW',
            carPrice: 15000
        }
    ]

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto p-4">
                    <table className="table table-striped table-hover table-bordered">
                        <thead className="table table-danger">
                            <tr>
                                <th>Nr</th>
                                <th>Car</th>
                                <th>Car Price</th>
                            </tr>
                        </thead>

                        <tbody className="table table-group-divider ">
                            {
                                cars.map((car, index) => {
                                    return <tr>
                                        <td>{index + 1}</td>
                                        <td>{car.carName}</td>
                                        <td>{car.carPrice}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table;