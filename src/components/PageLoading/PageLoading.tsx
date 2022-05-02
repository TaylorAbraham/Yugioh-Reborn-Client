import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './PageLoading.scss';

const PageLoading = (): JSX.Element => {
  return (
    <div className="page-loading">
      <CircularProgress size="5rem" />
    </div>
  );
};

export default PageLoading;
