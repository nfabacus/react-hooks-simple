import React, { useState } from 'react';
import { Button } from 'reactstrap';

const SimpleStatus = () => {
  console.log('SimpleStatus component!');
  const [ status, setStatus ] = useState(false);

  return (
    <div>
      <h2>Status: { status ? 'On' : 'Off' }</h2>
      <Button onChange={()=>setStatus(!status)}>Change Status</Button>
    </div>
  )
};

export default SimpleStatus;