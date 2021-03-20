import React from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = ({ active }) => {

    const loading = active;

    return (
        <Backdrop open = { loading } >
            <CircularProgress color="inherit" />
      </Backdrop>
    )
}

export default Loader;