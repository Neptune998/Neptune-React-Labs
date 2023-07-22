import React from 'react';

const Book = (props) => {
  return (
    <div>
      <h3>Title: {props.title}</h3>
      <p>Author: {props.author}</p>
    </div>
  );
};

const Bookshelf = () => {
  return (
    <div>
      <h2>My Bookshelf</h2>
      <Book title="React in Action" author="Mark T. Thomas" />
      <Book title="JavaScript: The Good Parts" author="Douglas Crockford" />
    </div>
  );
};

export default Bookshelf;
