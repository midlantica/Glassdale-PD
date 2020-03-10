import { getConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { ConvictionList } from './convictions/ConvictionsList.js'
//
import { getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalsList.js'
// 
import { getOfficers } from './officers/OfficerProvider.js'
import { OfficerList } from './officers/OfficersList.js'
//
getCriminals().then(() => CriminalList())
getOfficers().then(() => OfficerList())
getConvictions().then(() => ConvictionList())
getConvictions().then(() => ConvictionSelect())
// 
console.log("Glassdale PD main.js ✅")
