import React from 'react'
import Layout from '../components/layout'

import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default () => {
  useEffect(() => {
    navigate('/de');
  }, []);
  return null;
};
