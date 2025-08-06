const React = require('react');

function New (props){
    return(
        <div>
            <div className='head'>
                Add Your Restaurant with Dishly
                <link rel='stylesheet' href='/css/new.css'></link>
            </div>
            <div className='container'>
                <form action={`/restaurant?token=${props.token}`} method="POST">
                    <label>Restaurant Name</label>
                    <input type="text" name="name" id="name" required />

                    <label>Menu</label>
                    <input type="text" name="food" id="food" required />

                    <label>Image URL</label>
                    <input type="text" name="image" id="image" />

                    <label>Details</label>
                    <input type="text" name="description" id="description" required />

                    <label>Location</label>
                    <input type="text" name="location" id="location" required />

                    <button className="submit" type="submit">Submit</button>
                    <a className="backindex" href={`/restaurant?token=${props.token}`}>Back to Restaurant</a>
                </form>
            </div>
        </div>
    )
}

module.exports = New;
