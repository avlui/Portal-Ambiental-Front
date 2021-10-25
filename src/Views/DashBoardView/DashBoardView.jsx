import Sidebar from "../../Components/Common/sidebar/Sidebar";
import "./DashBoardView.css";
import Home from "./home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios";
import React, {useState} from "react";

function DashBoardView() {
    const [id, setId] = useState("");
    const [residuo, setResiduo] = useState("");
    const [empresa, setEmpresa] = useState('');
    const [datos, setDatos] = useState({
        enero: 0,
        febrero: 0,
        marzo: 0,
        abril: 0,
        mayo: 0,
        junio: 0,
        julio: 0,
        agosto: 0,
        septiembre: 0,
        octubre: 0,
        noviembre: 0,
        diciembre: 0,
    });
    const [circulacionDatos, setCirculacionDatos] = useState({
        enero: 0,
        febrero: 0,
        marzo: 0,
        abril: 0,
        mayo: 0,
        junio: 0,
        julio: 0,
        agosto: 0,
        septiembre: 0,
        octubre: 0,
        noviembre: 0,
        diciembre: 0,
    });
    const [tablaDatos, setTablaDatos] = useState([]);
    const getId = (id) => {
        setId(id);
    };
    const getEmpresa = (empresa) => {
        setEmpresa(empresa);
    };
    const getResiduo = (residuo) => {
        setResiduo(residuo);
    };

    const requestDatos = async () => {
        let newDatos = {
            enero: 0,
            febrero: 0,
            marzo: 0,
            abril: 0,
            mayo: 0,
            junio: 0,
            julio: 0,
            agosto: 0,
            septiembre: 0,
            octubre: 0,
            noviembre: 0,
            diciembre: 0,
        };
        let newCirculacionDatos = {
            enero: 0,
            febrero: 0,
            marzo: 0,
            abril: 0,
            mayo: 0,
            junio: 0,
            julio: 0,
            agosto: 0,
            septiembre: 0,
            octubre: 0,
            noviembre: 0,
            diciembre: 0,
        };
        const {reportes: reportesIds} = await axios
            .get(`/puntos/${id}`)
            .then((res) => {
                if (res && res.data.reportes) {
                    return res.data;
                }
            });
        for (const reporteId of reportesIds) {
            const reporteData = await axios
                .get(`/reportes/${reporteId}`)
                .then((res) => {
                    if (residuo === res.data.desperdicio)
                        return res.data;
                });
            if (reporteData) {
                newDatos[reporteData.mes] = reporteData.cantidad_desperdicio;
                newCirculacionDatos[reporteData.mes] = reporteData.cantidad_circulacion;
            }
        }
        setDatos(newDatos);
        setCirculacionDatos(newCirculacionDatos);
    };


    const requestTablaDatos = async () => {
        let newTablaDatos = [];

        const {reportes: reportesIds} = await axios
            .get(`/puntos/${id}`)
            .then((res) => {
                if (res && res.data.reportes) {
                    return res.data;
                }
            });

        for (const reporteId of reportesIds) {
            const reporteData = await axios
                .get(`/reportes/${reporteId}`)
                .then((res) => {
                    if (id === res.data.punto)
                        return res.data;
                });


            if (reporteData) {
                const residuoById = await axios.get(`/desperdicios/${reporteData.desperdicio}`).then((res) => {
                    return (res.data.tipo);
                });
                newTablaDatos.push(
                    {
                        empresa: empresa,
                        fecha: reporteData.mes,
                        residuo: residuoById,
                        unidades: 'kg',
                        cantidad: reporteData.cantidad_desperdicio,
                        circulacion: reporteData.cantidad_circulacion
                    });
            }
        }
        setTablaDatos(newTablaDatos);
    };


    React.useEffect(() => {
        if (id && residuo)
            requestDatos();
    }, [id, residuo]);

    React.useEffect(() => {
        if (empresa)
            requestTablaDatos();
    }, [empresa]);
    return (
        <Router>
            <div className="container">
                <Sidebar getId={getId} getResiduo={getResiduo} getEmpresa={getEmpresa}/>
                <Switch>
                    <Route exact path="/">
                        <Home datos={datos} circulacionDatos={circulacionDatos} tablaDatos={tablaDatos}
                              getEmpresa={getEmpresa}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default DashBoardView;
