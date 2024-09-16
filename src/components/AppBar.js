import React from 'react';

const AppBarContainer = `
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const AppBar = () => {
    const appBarStyle = {
        backgroundColor: '#333',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
      };
    
  return (
    <header style={appBarStyle} >
      <h1>Jaime León Rosado</h1>
      <h2>Software Engineer</h2>
    </header>
  );
};

export default AppBar;
