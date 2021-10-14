import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const handleChange = (event) => {
    setEmpresa(event.target.value);
    getEmpresaSelection(event.target.value);
  };
  const [empresa, setEmpresa] = React.useState("");
  const getEmpresaSelection = props.getEmpresaSelection;
  const empresas = props.param;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={empresa}
          label="Empresa"
          onChange={handleChange}
        >
          {empresas}
        </Select>
      </FormControl>
    </Box>
  );
}



