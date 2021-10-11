import MarkerIlustrations from "../../Assets/Ilustrations/MarkerIlustrations";
import { residuos } from "../../Cosnt/Waste";

function useMarkerIlustration(tipo) {
  // svg for the letleaft icon
  let MarkIl = MarkerIlustrations.default;

  if (residuos.includes(String(tipo))) {
    switch (tipo) {
      case "vidrio":
        MarkIl = MarkerIlustrations.glass;
        break;
      case "papel":
        MarkIl = MarkerIlustrations.paper;
        break;
      case "carton":
        MarkIl = MarkerIlustrations.paperboard;
        break;
      case "aceite":
        MarkIl = MarkerIlustrations.oil;
        break;
      case "organico":
        MarkIl = MarkerIlustrations.organic;
        break;
      case "cafe":
        MarkIl = MarkerIlustrations.coffee;
        break;
      case "plastico":
        MarkIl = MarkerIlustrations.plastic;
        break;
      default:
        MarkIl = MarkerIlustrations.default;
    }
  }

  return MarkIl;
}
export default useMarkerIlustration;
