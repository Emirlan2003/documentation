import React from 'react';
import DocumentationContextProvider from './context/DocumentationContext';
import Routes from './Routes';
import './App.css'
const App = () => {
  return (
    <DocumentationContextProvider>
      <Routes />
    </DocumentationContextProvider>
  );
};

export default App;