import { getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalsList.js'
import { OfficerList } from './Officers/OfficerList.js'
import { getOfficers } from './Officers/OfficerProvider.js'

getCriminals().then(() => CriminalList())
getOfficers().then(() => OfficerList())

console.log("Glassdale PD main.js ✅")
