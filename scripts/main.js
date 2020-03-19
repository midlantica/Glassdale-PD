import { getConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals } from "./criminals/CriminalProvider.js"
import { DisplayCriminalsButton } from "./criminals/DisplayCriminalsButton.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NotesList } from "./notes/NoteList.js"
//
getCriminals().then(CriminalList)
getConvictions().then(ConvictionSelect)
CriminalList()
NotesList()
//
DisplayNotesButton()
DisplayCriminalsButton()
DisplayNoteFormButton()
NoteForm()
