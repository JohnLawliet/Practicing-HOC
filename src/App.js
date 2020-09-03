import React from 'react';
import UserList from './components/user-list/user-list.component'
import UserProfile from './components/user-profile/user-profile.component'
import './App.scss';


function App() {
  return (
    <div className="App">
      <UserList dataSource="https://jsonplaceholder.typicode.com/users"/>
      <UserProfile 
        name = "Shiladitya"
        email = "something@gmail.com"
        dataSource = "https://jsonplaceholder.typicode.com/posts"
      />
    </div>
  );
}

export default App;
