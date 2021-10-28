import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const Content = () => {
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState('hello');

  return (
    <div>
      <Button style={{ margin: 50 }} variant="contained">Create Content</Button>
    </div>
  );
};

export default Content;
