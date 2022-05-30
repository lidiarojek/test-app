import { Card, CardContent } from '@mui/material';
import React from 'react';


export const About = () => {

  return <div style={{display: 'flex', flexDirection: 'column'}}>
    <Card>
      <CardContent>
        <a className="App-link" href="https://github.com/lidiarojek/test-app" target="_blank"
           rel="noopener noreferrer">test-react-project</a>
      </CardContent>
    </Card>
  </div>;
};