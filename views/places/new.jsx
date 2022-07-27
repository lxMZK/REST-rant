const React = require('react')
const Def = require('../default')

function newPlace(data) {
    let statesFormatted = data.states.map((state, index) => {
        return (
            <option key={index} value={state}>{state}</option>
        )
    })

    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form action="/places" method='POST'>
                    <div className='form-group'>
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control' type="text" id='name' name='name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' type="url" id='pic' name='pic' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="city">City</label>
                        <input className='form-control' type="text" id='city' name='city' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="state">State</label>
                        <select name="state" id="state">{statesFormatted}</select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className='form-control' type="text" id='cuisines' name='cuisines' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded Year</label>
                        <input className="form-control" id="founded" name="founded" type='number' value={new Date().getFullYear} />
                    </div>

                    <input className='btn btn-primary' type="submit" value='Add Place' />
                </form>
            </main>
        </Def>
    )
}

module.exports = newPlace