const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '★'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main id='show'>
                <img src={data.place.pic} alt="img" id='showImg' />
                <div>
                    <h1>{data.place.name}</h1>
                    <h2>Rating</h2>
                    {rating}
                    <h2>Description</h2>
                    <p>{data.place.showEstablished()}</p>
                    <p>{data.place.name} serves {data.place.cuisines}</p>
                    <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>Edit</a>
                    <form action={`/places/${data.place.id}?_method=DELETE`} method='POST'>
                        <button type='submit' className='btn btn-danger'>Delete</button>
                    </form>
                    <h2>Comments</h2>
                    {comments}
                    <h2>Got Your Own Rant or Rave?</h2>
                    <form action={`/places/${data.place.id}/comment`} method='POST'>
                        <div className='form-group'>
                            <label htmlFor="content">Content</label>
                            <input className='form-control' type="textarea" id='content' name='content' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="author">Author</label>
                            <input className='form-control' type="text" id='author' name='author' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="star">Star Rating</label>
                            <input className='form-control' type="number" step={.5} name='stars' id='stars' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="rant">Rant?</label>
                            <input type="checkbox" name='rant' id='rant' />
                        </div>
                        <input className='btn btn-primary' type="submit" value='Add Comment' />
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show