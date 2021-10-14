import React, { Fragment, useState } from "react";
import { FormControl, Select, MenuItem, InputLabel, TextField, Button } from "@mui/material";
import Box from '@mui/material/Box';
import axios from 'axios'

const Autoregistro = () => {

    const [desperdicios, setDesperdicios] = useState([])
    const [tipos, setTipos] = useState([])
    const [opciones, setOpciones] = useState([])
    const [unidades, setUnidades] = useState(["Kg", "Toneladas", "Litros"])
    const [punto, setPunto] = useState('61621337c6826f690ed6dc58')


    const onSubmit = (e) => {
        e.preventDefault()

        const body = {
            desperdicio: datos.desperdicio,
            punto: punto,
            numero_reporte: 3,
            mes: datos.mes,
            cantidad_desperdicio: datos.cantidad,
            cantidad_impacto: 0,
            cantidad_circulacion: datos.circulacion
        }
        console.log(body);
        axios.post('http://localhost:5000/reportes/add', body).then((res) => {
            axios.get('http://localhost:5000/reportes/last').then((res_2) => {
                axios.get(`http://localhost:5000/puntos/${body.punto}`).then((res) => {
                    console.log(res.data);
                    res.data.reportes.push(res_2.data[0]._id)
                    console.log(res.data);
                    axios.post(`http://localhost:5000/puntos/update/${body.punto}`, res.data).then((res) => console.log(res))
                })
            })
        })
    }

    const [datos, setDatos] = useState({
        desperdicio: '',
        unidades: ['Kg', 'Toneladas', "Litros"],
        unidad: '',
        cantidad: 0,
        circulacion: 0,
        mes: ''
    })

    React.useEffect(() => {
        setUnidades(unidades.map((unidad) => <MenuItem key={unidad} value={unidad}> {unidad} </MenuItem>))
        axios.get(`http://localhost:5000/puntos/${punto}`).then((res) => {
            setDesperdicios(res.data.desperdicios)
        })
    }, [])

    React.useEffect(() => {
        desperdicios.forEach(desperdicio => {
            axios.get(`http://localhost:5000/desperdicios/${desperdicio}`).then((res) => {
                tipos.unshift(res.data.tipo)
                setTipos(tipos.concat([]))
            })
        });
    }, [desperdicios])

    React.useEffect(() => {
        if (tipos.length === desperdicios.length) {
            setOpciones(tipos.reverse().map((tipo) => <MenuItem key={tipo} value={desperdicios[tipos.indexOf(tipo)]}> {tipo} </MenuItem>))
        }
    }, [tipos])

    const CheckNumber = () => {
        if (!isNaN(datos.cantidad)) {
            console.log(datos.desperdicio);
        }
        else {
            console.log(datos.desperdicio);
        }
    }

    const HandleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const HandleDesperdicio = (event) => {
        setDatos({
            ...datos,
            desperdicio: event.target.value,
        })
    }

    return (
        <Fragment>
            <div className="m-4">
                <h1 className="" style={{  fontsize: '22px',
                    fontweight: '600',
                    color: '#449342'}}>Autorregistro</h1>
            </div>
            <Box
                component="form"
                onSubmit={onSubmit}
                sx={{ mx: "25px" }}
            >
                <div className="row">

                    <div className="col-md-6 mt-5">

                        <FormControl fullWidth>
                            <InputLabel id="desperdicio-label" sx={{ backgroundColor: "#FFFFFF", fontSize: '20px', lineHeight: "1em"}}>Desperdicio</InputLabel>
                            <Select
                                required
                                labelId="desperdicio-label"
                                name="desperdicio"
                                label="Desperdicio"
                                defaultValue=""
                                value={datos.desperdicio}
                                onChange={HandleDesperdicio}
                            >
                                {opciones}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-5 mt-5">
                        <FormControl fullWidth>
                            <TextField
                                required
                                label="cantidad desperdicios"
                                variant="outlined"
                                name="cantidad"
                                onChange={HandleChange}
                                onBlur={CheckNumber}
                            >

                            </TextField>
                        </FormControl>
                    </div>
                    <div className="col-md-1 mt-5">
                        <FormControl fullWidth>
                            <InputLabel id="unidad-label" sx={{ backgroundColor: "#FFFFFF", fontSize: '15px', lineHeight: "1em"}}>Unidades</InputLabel>
                            <Select
                                required
                                labelId="unidad-label"
                                name="unidad"
                                label="Unidad"
                                value={datos.unidad}
                                onChange={HandleChange}
                            >
                                {unidades}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-6 mt-5">
                        <FormControl fullWidth color="error">
                            <TextField
                                required
                                label="cantidad de desperdicios puestos a circular"
                                variant="outlined"
                                name="circulacion"
                                onChange={HandleChange}
                                onBlur={CheckNumber}
                            >

                            </TextField>
                        </FormControl>
                    </div>
                    <div className="col-md-6 mt-5">
                        <FormControl fullWidth color="error">
                            <InputLabel id="mes-label" sx={{ backgroundColor: "#FFFFFF", fontSize: '20px', lineHeight: "1em"}}>Mes</InputLabel>
                            <Select
                                required
                                labelId="mes-label"
                                name="mes"
                                label="Mes"
                                value={datos.mes}
                                onChange={HandleChange}
                            >
                                <MenuItem value={"enero"}>Enero</MenuItem>
                                <MenuItem value={"febrero"}>Febrero</MenuItem>
                                <MenuItem value={"marzo"}>Marzo</MenuItem>
                                <MenuItem value={"abril"}>Abril</MenuItem>
                                <MenuItem value={"mayo"}>Mayo</MenuItem>
                                <MenuItem value={"junio"}>Junio</MenuItem>
                                <MenuItem value={"julio"}>Julio</MenuItem>
                                <MenuItem value={"agosto"}>Agosto</MenuItem>
                                <MenuItem value={"septiembre"}>Septiembre</MenuItem>
                                <MenuItem value={"octubre"}>Octubre</MenuItem>
                                <MenuItem value={"noviembre"}>Noviembre</MenuItem>
                                <MenuItem value={"diciembre"}>Diciembre</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-12 mb-5 mt-5">
                        <Button type="submit" color="success" variant="contained" size="large">Enviar</Button>
                    </div>

                </div>
            </Box>
        </Fragment>
    )
}

export default Autoregistro;