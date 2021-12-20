const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map((c) => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className='show-container'>
                    <div className='show-image'>
                        <img src={data.place.pic} />
                    </div>
                    <div className='show-content'>
                        <h1>{data.place.name}</h1>
                        <h3>Rating</h3>
                        <p>No Rating Yet</p>
                        <h4>Description</h4>
                        <p>Located in {data.place.city},{data.place.state}</p>
                        <p>Type: {data.place.cuisines}</p>
                        <h4>About</h4>
                        <p>{data.place.showEstablished()}</p>
                    </div>
                </div>
                <div className='show-comments'>
                    <h2>Comments</h2>
                    {comments}
                </div>
                <div className="show-review">
                    <form method="POST" action={`/places/${data.place.id}/comment`}>
                        <div className='upper-show-review'>
                            <div className="form-group user-name">
                                <label className="form-text" htmlFor="author">User Name</label>
                                <input className="form-control" id="author" name="author" required />
                            </div>
                            <div className="form-group rating">
                                <label className="form-text" htmlFor="stars">Rating</label>
                                <input className="form-control" type="number" step=".5" min="0" max="5" id="stars" name="stars" required />
                            </div>
                            <div className='form-group show-review-check'>
                                <input className='checkbox' type="checkbox" id="rant" name="rant" />
                                <label className="form-text" htmlFor="rant">Rant?</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-text" htmlFor="content">Content</label>
                            <textarea className="form-control" id="content" name="content" required />
                        </div>
                        <input className="btn btn-primary form-submit" type="submit" value="Add Review" />
                    </form>
                </div>
                <div className='show-buttons'>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def >
    )
}

module.exports = show
