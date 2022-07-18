const React = require('react')
const Def = require('../default')

function edit(place){
    return (
        <Def>
            <h1>EDIT</h1>
            <p>(editing: {place.name})</p>
        </Def>
    )
}

module.exports = edit