import React from 'react';
import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';

export const MySwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 2, 
    border: '1px solid #444',
    backgroundColor: '#1a1a1a',
    opacity: 1,
  },
  '& .MuiSwitch-thumb': {
    borderRadius: 2,
    backgroundColor: '#6b7aff', 
    width: 16,
    height: 16,
    boxShadow: '0 0 10px #6b7aff',
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#2e3b55',
  },
}));