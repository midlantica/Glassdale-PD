import { getConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals } from "./criminals/CriminalProvider.js"
// import { DisplayCriminalsButton } from "./criminals/DisplayCriminalsButton.js"
import "./criminals/KnownAssociatesDialog.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NotesList } from "./notes/NoteList.js"
import { WitnessList } from "./witnesses/WitnessList.js"
import { WitnessStatementButton } from "./witnesses/WitnessStatementButton.js"
//
getCriminals()
  .then(CriminalList)
  .then(NotesList)
  .then(NoteForm)

getConvictions().then(ConvictionSelect)
CriminalList()
//
DisplayNotesButton()
DisplayNoteFormButton()

// DisplayCriminalsButton()

WitnessStatementButton()
WitnessList()
