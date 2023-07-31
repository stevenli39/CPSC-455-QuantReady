import React, { useEffect } from 'react';
import Router from './router.js';
import Nav from './components/Nav.js';
import { connect } from 'react-redux';
import { fetchUser } from './redux/actions/authActions.js';

function App({ fetchUser }) {

  useEffect(() => {
    fetchUser();
  }, [fetchUser]); 

  return (
    <>
      <Nav />
      <Router />
    </>
  );
}

export default connect(null, { fetchUser })(App);