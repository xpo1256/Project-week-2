const React = require('react');

function Edit(props) {
  const { _id, name, restaurant, review } = props.reviews || {};

  // Defensive check for props.reviews being undefined/null
  if (!props.reviews) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <link href='/css/Edit.css' rel='stylesheet'></link>
      </header>
      <div className='head'>
        Edit Review for {restaurant}
      </div>
      <div className='container'>
        <form action={`/reviews/${_id}?_method=PUT&token=${props.token}`} method="POST">
          <label>Name</label>
          <input type='text' name='name' defaultValue={name} />

          <label>Restaurant</label>
          <input type='text' name='restaurant' defaultValue={restaurant} />

          <label>Review</label>
          <input type='text' name='review' defaultValue={review} />

          <button className='submit' type='submit'>Submit</button>
          <a className='backindex' href={`/reviews?token=${props.token}`}>Back</a>
        </form>
      </div>
    </div>
  );
}

module.exports = Edit;
