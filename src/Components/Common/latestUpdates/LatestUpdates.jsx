import "./lastestUpdates.css";
import React, { useState, useEffect } from "react";

export default function LatestUpdates({ param })  {

    const [datos, setDatos] = useState([]);

        const Button = ({type}) => {
            return <button className={"latestButton " + type}>{type}</button>;
        };

        useEffect(() => {
            setDatos(param);
        }, [param]);

        return (

            <div className="latest">
                <h3 className="latestTitle">Últimas Actualizaciones</h3>
                <table className="latestTable">
                    <tr className="latestTr">
                        <th className="latestTh">Empresa</th>
                        <th className="latestTh">Mes</th>
                        <th className="latestTh">Residuo</th>
                        <th className="latestTh">Producidos</th>
                        <th className="latestTh">En circulación</th>
                    </tr>
                    {
                        datos.map((dato) => {
                            return (
                                <tr className="latestTr">
                                    <td className="latestName">{dato.empresa}</td>
                                    <td className="latestDate">{dato.fecha}</td>
                                    <td className="latestResidue">{dato.residuo}</td>
                                    <td className="latestAmount">{dato.cantidad + ' ' + dato.unidades}</td>
                                    <td className="latestAmount">{dato.circulacion + ' ' + dato.unidades}</td>
                                </tr>
                            );
                        })

                    }
{/*                    <tr className="latestTr">
                        <td className="latestUser">
                            <img
                                src="https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png"
                                alt=""
                                className="latestImg"
                            />
                            <span className="latestName">Starbucks</span>
                        </td>
                        <td className="latestDate">2 Jun 2021</td>
                        <td className="latestResidue">Plástico</td>
                        <td className="latestUnit">toneladas</td>
                        <td className="latestAmount">22</td>
                    </tr>*/}
                </table>
            </div>
        );
}
