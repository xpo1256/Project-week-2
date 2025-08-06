const React = require('react');

function New (props){
    return(
        <div>
            <div className='head'>
                Add Your Restaurant with Dishly
            </div>
            <div className='container'>
                <form action={`/reviews?token=${props.token}`} method="POST">

                    <label>name</label>
                    <input type="text" name="name" id="name" required />

                    <label>Restaurant</label>
                    <input type="text" name="restaurant" id="restaurant" required />

                    <label>Review</label>
                    <input type="text" name="review" id="review" required />

                    <button className="submit" type="submit">Submit</button>
                    <a className="backindex" href={`/restaurant?token=${props.token}`}>Back to Restaurant</a>
                </form>
            </div>
        </div>
    )
}

module.exports = New;
