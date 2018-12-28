import React, { useState } from 'react';
import { Container, Button } from 'reactstrap';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <Container className="App pt-4">
      <UserList />
      <div>
        <Button color="primary" onClick={()=>setResource('posts')}>
          Post
        </Button>
        {' '}
        <Button color="primary" onClick={()=>setResource('todos')}>
          Todos
        </Button>
      </div>
      <ResourceList resource={resource} />
    </Container>
  );
}

export default App;
