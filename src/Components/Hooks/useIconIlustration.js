import IconsIlustrations from '../../Assets/Ilustrations/IconsIlustrations'
import {waste} from '../../Cosnt/Waste'

function useIconIlustration(type) {

    // svg for the letleaft icon
    let iconType = undefined
    
    if (waste.includes(String(type))){

       switch (type){
           case 'plastic' :
                iconType = IconsIlustrations.plasticIcon
                break
            case 'coffee' :
                iconType = IconsIlustrations.coffeeIcon
                break
            case 'oil' :
                iconType = IconsIlustrations.oilIcon
                break
            case 'organic' :
                iconType = IconsIlustrations.organicIcon
                break
            case 'glass' :
                iconType = IconsIlustrations.glassIcon
                break
            case 'paper' :
                iconType = IconsIlustrations.paperIcon
                break
            case 'paperboard' :
                iconType = IconsIlustrations.paperboardIcon
                break
           default: iconType = undefined
       }
    }

    return iconType
}
export default useIconIlustration;