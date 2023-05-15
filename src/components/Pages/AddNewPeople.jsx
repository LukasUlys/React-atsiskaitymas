import React, { useState } from 'react';

function Add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    window.location.href = '/home';
  };

  return (
    <div>
      <nav>
   
        <ul>
          <li>
            <a href="/">Logotipas</a>
          </li>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/add">Add</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>

      <div>
        <h1>Add</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
            ></textarea>
          </div>
          <button type="submit">Create</button>
        </form>
      </div>

      <footer>
        <p>© 2023 Projektas. Visos teisės saugomos.</p>
      </footer>
    </div>
  );
}

export default Add;