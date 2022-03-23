import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

 function StateNames() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      autoComplete="off"
      options={States}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select State" />}
    />
  );
}


const States = [ 
  { label:'Andhra Pradesh '},
  { label:'Arunachal Pradesh '},
  { label:'Assam '},
  { label:'Bihar '},
  { label:'Chhattisgarh '},
  { label:'Goa '},
  { label:'Gujarat '},
  { label:'Haryana '},
  { label:'Tamil Nadu'},
  { label:'Jammu and Kashmir '},
  { label:'Jharkhand'},
  { label:'Karnataka '},
  { label:'Kerala '},
  { label:'Madhya Pradesh'},
  { label:'Maharashtra'},
  { label:'Manipur'},
  { label:'Meghalaya '},
  { label:'Mizoram '},
  { label:'Nagaland'},
  { label:'Odisha '},
];
export default StateNames;