import IconsIlustrations from "../../Assets/Ilustrations/IconsIlustrations";
import { residuos } from "../../Cosnt/Waste";

function IconIlustration(tipo) {
  // svg for the letleaft icon
  let iconType = undefined;

  if (residuos.includes(String(tipo))) {
    switch (tipo) {
      case "plastico":
        iconType = IconsIlustrations.plasticIcon;
        break;
      case "cafe":
        iconType = IconsIlustrations.coffeeIcon;
        break;
      case "aceite":
        iconType = IconsIlustrations.oilIcon;
        break;
      case "organico":
        iconType = IconsIlustrations.organicIcon;
        break;
      case "vidrio":
        iconType = IconsIlustrations.glassIcon;
        break;
      case "papel":
        iconType = IconsIlustrations.paperIcon;
        break;
      case "carton":
        iconType = IconsIlustrations.paperboardIcon;
        break;
      case "todos":
        iconType = IconsIlustrations.allIcon;
          break;
      default:
        iconType = undefined;
    }
  }

  return iconType;
}
export default IconIlustration;
