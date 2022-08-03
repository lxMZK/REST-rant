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
                            <input className='form-control' type="text" id='name' name='name' defaultValue={data.place.name} required />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor="pic">Place Picture</label>
                            <input className='form-control' type="url" id='pic' defaultValue={data.place.pic} name='pic' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor="city">City</label>
                            <input className='form-control' type="text" id='city' name='city' defaultValue={data.place.city} />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor="state">State</label>
                            <select name="state" id="state" defaultValue={data.place.state}>{statesFormatted}</select>
                        </div>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className='form-control' type="text" id='cuisines' name='cuisines' defaultValue={data.place.cuisines} required />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="founded">Founded</label>
                        <input className='form-control' id='founded' name='founded' defaultValue={data.place.founded} />
                    </div>
                    <br />
                    <input className='btn btn-primary' type="submit" value='Save Changes' />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit