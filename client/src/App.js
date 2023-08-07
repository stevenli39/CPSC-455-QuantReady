import React, { useEffect } from 'react';
import Router from './router.js';
import Nav from './components/Nav.js';

import Footer from './components/footer.js';


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
      <Footer />
     
      
    </>
  );
}

export default connect(null, { fetchUser })(App);