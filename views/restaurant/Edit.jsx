const React = require('react');

function Edit(props) {
    const { _id, name, food, description, location } = props.restaurant; 

    return (
        <div>
            <header>
                <link href='/css/Edit.css' rel='stylesheet'></link>
            </header>
            <div className='head'>
                {name} 
            </div>
            <div className='container'>
                <form action={`/restaurant/${_id}?_method=PUT&token=${props.token}`} method="POST">
                    <label>Restaurant Name</label>
                    <input type='text' name='name' id='name' defaultValue={name} />

                    <label>Menu</label>
                    <input type='text' name='food' id='food' defaultValue={food} />

                    <label>Details</label>
                    <input type='text' name='description' id='description' defaultValue={description} />

                    <label>Location</label>
                    <input type='text' name='location' id='location' defaultValue={location} />

                    <button className='submit' type='submit'>Submit</button>
                    <a className='backindex' href={`/restaurant/${_id}?token=${props.token}`}>Back to Edit</a>

                </form>
            </div>
        </div>
    );
}

module.exports = Edit;
