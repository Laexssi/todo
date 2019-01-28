import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';


const App = () => {

    const todoData = [
        {label: ' Drink Cofee', important: false, id: 1}, 
        {label: ' Make a Common App', important: true, id: 2},
        {label: ' Get a Job', important: false, id: 3},
    ];


    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos = { todoData }/>
        </div>
    );
};

ReactDOM.render (<App />,
    document.getElementById('root'));
