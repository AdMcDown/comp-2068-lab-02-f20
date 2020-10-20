import React from 'react';
import Styles from './styles';

const Header = ({ title }) => {
  return (
    <>
      <Styles.Header>
        <h1>{title = "A common header of course!!"}</h1>
      </Styles.Header>
      <Styles.Header>
        <div>
          <iframe src="https://giphy.com/embed/giWj7zg6SlzxfHXGfD" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ElevenSportsBE-elevensports-elevensportsgif-forthefans-giWj7zg6SlzxfHXGfD">via GIPHY</a></p>
        </div>
      </Styles.Header>
    </>
  );
}

export default Header;