import { getConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals } from "./criminals/CriminalProvider.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
//
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
//
// import { getNotes } from "./notes/NoteDataProvider.js"
//
import NoteForm from "./notes/NoteForm.js"
import "./notes/NoteList.js"
//
// import { getOfficers } from "./officers/OfficerProvider.js"
// import { OfficerList } from "./officers/OfficersList.js"
//
getCriminals().then(CriminalList)
// getNotes().then(NoteList)

// first get all convictions, THEN create the conviction dropdown
getConvictions().then(ConvictionSelect)
// getOfficers().then(() => OfficerList())
//
DisplayNotesButton()
DisplayNoteFormButton()
NoteForm()
