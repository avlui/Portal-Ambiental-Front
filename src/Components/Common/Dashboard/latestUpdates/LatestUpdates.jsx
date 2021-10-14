import "./lastestUpdates.css";
import {Component} from "react";

export default class latestUpdates extends Component {
  render() {
    const Button = ({type}) => {
      return <button className={"latestButton " + type}>{type}</button>;
    };
    return (
        <div className="latest">
          <h3 className="latestTitle">Últimas Actualizaciones</h3>
          <table className="latestTable">
            <tr className="latestTr">
              <th className="latestTh">Empresa</th>
              <th className="latestTh">Fecha</th>
              <th className="latestTh">Residuo</th>
              <th className="latestTh">Unidades</th>
              <th className="latestTh">Cantidad</th>
            </tr>
            <tr className="latestTr">
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
            </tr>
            <tr className="latestTr">
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
            </tr>
            <tr className="latestTr">
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
            </tr>
            <tr className="latestTr">
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
            </tr>
            <tr className="latestTr">
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
            </tr>
          </table>
        </div>
    );
  }
}
