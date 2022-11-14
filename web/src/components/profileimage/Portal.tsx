import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const Portal = ({ portalDiv, children }) => {
  const [portal] = useState(document.createElement('div'));

  //const portalRoot = document.getElementById(portalDiv);

  useEffect(() => {
    const portalRoot = document.getElementById(portalDiv);
    portalRoot && portalRoot.appendChild(portal);
    return () => {
      portalRoot && portalRoot.removeChild(portal);
    };
  }, [portal, portalDiv]);

  return ReactDOM.createPortal(children, portal);
};

Portal.propTypes = {
  portalDiv: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Portal;
