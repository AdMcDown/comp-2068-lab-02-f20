import React from 'react';
import Header from '../shared/Header';
import { Link } from 'react-router-dom';
// You need to import your shared header...
import Styles from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Link to="../About">
        <Styles.Button>About</Styles.Button>
      </Link>
    </>
  );
}

export default Home;