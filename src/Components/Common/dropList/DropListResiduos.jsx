import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [residuo, setResiduo] = React.useState('');
  const getResiduoSelection = props.getResiduoSelection;
  const residuos = props.param;
  const handleChange = event => {
    setResiduo(event.target.value);
    getResiduoSelection(event.target.value);
  };


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
          value={residuo}
          label="Residuo"

        >
          {residuos}
          
        </Select>
      </FormControl>
    </Box>
  );
}