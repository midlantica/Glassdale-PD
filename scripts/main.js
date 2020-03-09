import { getConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionList } from './convictions/ConvictionsList.js'
//
import { getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalsList.js'
// 
import { getOfficers } from './officers/OfficerProvider.js'
import { OfficerList } from './officers/OfficersList.js'

getCriminals().then(() => CriminalList())
getOfficers().then(() => OfficerList())
getConvictions().then(() => ConvictionList())

console.log("Glassdale PD main.js ✅")
