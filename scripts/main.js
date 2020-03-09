import { getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalsList.js'
// import { getOfficers } from './Officers/OfficerProvider.js'

// getOfficers()
getCriminals().then(() => CriminalList())

console.log("Glassdale PD main.js")