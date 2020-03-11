import { getConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals } from "./criminals/CriminalProvider.js"
//
import { getOfficers } from "./officers/OfficerProvider.js"
import { OfficerList } from "./officers/OfficersList.js"
//
getCriminals().then(CriminalList)

// first get all convictions, THEN create the conviction dropdown
getConvictions().then(ConvictionSelect)
getOfficers().then(() => OfficerList())
