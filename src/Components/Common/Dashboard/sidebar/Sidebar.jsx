import "./sidebar.css";
import DropListE from "../dropList/DropListEmpresas.jsx"
import DropListR from "../dropList/DropListResiduos.jsx"
import * as React from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";

export default function Sidebar(props) {
    const [opcionesEmpresa, setOpcionesEmpresa] = React.useState([]);
    const [opcionesResiduo, setOpcionesResiduo] = React.useState([]);
    const [selectionEmpresa, setSelectionEmpresa] = React.useState('');
    const [selectionResiduo, setSelectionResiduo] = React.useState('');
    const empresas = [];
    const residuos = [];

    const getId = props.getId;
    const getResiduo = props.getResiduo;

    React.useEffect(() => {
        axios.get('http://localhost:5000/puntos').then((res) => {
            res.data.forEach((punto) => {
                empresas.push(punto.nombrePunto)
            });
            
            setOpcionesEmpresa(empresas.map((empresa) => (
                <MenuItem key={empresa._id} value={empresa}>{empresa}</MenuItem>
            )));

        })
    },[]);
    React.useEffect(() => {
        axios.get('http://localhost:5000/desperdicios').then((res) => {
            res.data.forEach((residuo) => {
                residuos.push(residuo.tipo)
            });
            setOpcionesResiduo(residuos.map((residuo) => (
                <MenuItem key={residuo} value={residuo}>{residuo}</MenuItem>
            )));
        })
    }, [])


    const getEmpresaSelection = (selection) => {
        setSelectionEmpresa(selection);

            axios.get('http://localhost:5000/puntos').then((res) => {
                res.data.forEach((punto) => {
                    if(punto.nombrePunto === selection){
                        getId(punto._id)
                    }
                });
                
                
    
            });
     

    }

    const getResiduoSelection = (selection) => {
        setSelectionResiduo(selection);

        axios.get(`http://localhost:5000/desperdicios`).then((res) => {
            res.data.forEach((residuo) => {
                if(residuo.tipo === selection){
                    getResiduo(residuo._id)
                }
            });



        });


    }

    const updateSelection = () => {
        setSelectionEmpresa(selectionEmpresa);
        setSelectionResiduo(selectionResiduo);
        console.log(selectionEmpresa,selectionResiduo, "ENVIA BOTON")
    }

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Empresa</h3>
                    <ul className="sidebarList">
                        <DropListE param={opcionesEmpresa} getEmpresaSelection={getEmpresaSelection}/>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Residuo</h3>
                    <ul className="sidebarList">
                        <DropListR param={opcionesResiduo} getResiduoSelection={getResiduoSelection}/>
                    </ul>
                </div>
            </div>
        </div>
    );
}
