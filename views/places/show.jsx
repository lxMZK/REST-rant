const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main id='show'>
                <img src={data.place.pic} alt="img" id='showImg' />
                <div>
                    <h1>{data.place.name}</h1>
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                    <h2>Description</h2>
                    <p>{data.place.showEstablished()}</p>
                    <p>{data.place.name} serves {data.place.cuisines}</p>
                    <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
                    <form action={`/places/${data.id}?_method=DELETE`} method='POST'>
                        <button type='submit' className='btn btn-danger'>Delete</button>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show