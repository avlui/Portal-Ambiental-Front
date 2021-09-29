import MarkerIlustrations from '../../Assets/Ilustrations/MarkerIlustrations'
import {waste} from '../../Cosnt/Waste'

function useMarkerIlustration(type) {

    // svg for the letleaft icon
    let MarkIl = MarkerIlustrations.default
    
    if (waste.includes(String(type))){

       switch (type){
           case 'glass' :
           MarkIl = MarkerIlustrations.glass
           break
           case 'paper' :
           MarkIl = MarkerIlustrations.paper
           break
           case 'paperboard' :
           MarkIl = MarkerIlustrations.paperboard
           break
           case 'oil' :
           MarkIl = MarkerIlustrations.oil
           break
           case 'organic' :
           MarkIl = MarkerIlustrations.organic
           break
           case 'coffee' :
           MarkIl = MarkerIlustrations.coffee
           break
           case 'plastic' :
           MarkIl = MarkerIlustrations.plastic
           break
           default: MarkIl = MarkerIlustrations.default
       }
    }

    return MarkIl
}
export default useMarkerIlustration;