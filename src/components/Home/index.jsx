import React from 'react';
import Header from '../shared/Header';
import { Link } from 'react-router-dom';
// You need to import your shared header...
import Styles from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Styles.Button>
        <Link to="../About"><div>About</div></Link>
      </Styles.Button>
    </>
  );
}

export default Home;