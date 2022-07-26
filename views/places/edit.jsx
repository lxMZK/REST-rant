const React = require('react')
const Def = require('../default')

function edit(data) {
    let statesFormatted = data.states.map((state, index) => {
        return (
            <option key={index} value={state}>{state}</option>
        )
    })

    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form action={`/places/${data.place.id}?_method=PUT`} method='POST'>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor="name">Place Name</label>
                            <input className='form-control' type="text" id='name' name='name' value={data.place.name} required />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor="pic">Place Picture</label>
                            <input className='form-control' type="url" id='pic' value={data.place.pic} name='pic' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor="city">City</label>
                            <input className='form-control' type="text" id='city' name='city' value={data.place.city} />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor="state">State</label>
                            <select name="state" id="state" value={data.place.state}>{statesFormatted}</select>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className='form-control' type="text" id='cuisines' name='cuisines' value={data.place.cuisines} required />
                    </div>
                    <input className='btn btn-primary' type="submit" value='Add Place' />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit