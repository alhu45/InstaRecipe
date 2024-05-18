import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './Components/Navbar';
import ImageClassifier from './Components/ImageClassifier';
import Background from './Components/Background';

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Redirecting to login...</div>;
  }

  return (
    <>
      <Navbar />
      <Background />
      <ImageClassifier />
    </>
  );
}

export default App;
