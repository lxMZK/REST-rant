const React = require('react')
const Def = require('../default')

function details(place){
    return (
        <Def>
            <h1>DETAILS</h1>
            <p>Name: {place.name}</p>
            <p>City: {place.city}</p>
            <p>State: {place.state}</p>
            <p>Cuisines: {place.cuisines}</p>
            <img src={place.pic} alt={place.name} />
            <form action={`/places/${place.id}/edit`}>
                <input type="submit" value='edit'/>
            </form>
        </Def>
    )
}

module.exports = details