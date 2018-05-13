/**
 * Created by Gryzli on 12.02.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faCopyright, faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { withStyles } from 'material-ui';

const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'column',
    color: '#a9a9a9',
    fontSize: 'smaller',
    textAlign: 'center',
    marginTop: 30,
  },
};

const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    <span>
      {'site created by '}
      <a href="https://github.com/dracomithril" target="_newtab">
        <FontAwesomeIcon icon={faGithub} />
        dracomithril
      </a>
    </span>
    <span>
      {` v${process.env.REACT_APP_VERSION} `}
      <FontAwesomeIcon icon={faCopyright} />
      {' Copyright 2017 '}
    </span>
    <span>
      {'Any questions? '}
      <a href="mailto:dracomithril@gmail.com?subject=[WaterFlowAdmin]">
        <FontAwesomeIcon icon={faEnvelope} />
        {' contact me'}
      </a>
    </span>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Footer);
