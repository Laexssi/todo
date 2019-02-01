import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Планы на день</h1>
      <h2>{toDo} еще осталось, {done} уже готово</h2>
    </div>
  );
};

export default AppHeader;