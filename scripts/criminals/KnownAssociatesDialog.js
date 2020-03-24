import { useCriminals } from "./CriminalProvider.js"

const contentTarget = document.querySelector(".knownAssociatesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("knownAssociatesClicked", customEvent => {
  // Get the criminal id
  const criminalId = customEvent.detail.chosenCriminal

  const criminalArray = useCriminals()

  // Find returns the very first object that matches the condition in the callback function
  const iFoundYou = criminalArray.find(currentCriminal => {
    if (currentCriminal.id === parseInt(criminalId)) {
      return true
    }
    return false
  })

  KnownAssociatesDialog(iFoundYou)

  const miniModal = document.querySelector("#miniModal")
  miniModal.showModal()
})

export const KnownAssociatesDialog = criminalObject => {
  contentTarget.innerHTML = `
    <dialog id="miniModal">
      <h4 class="float-left">Associates</h4><span class="xOut" onclick="closeXout()">X</span>
      ${criminalObject.known_associates
        .map(currentAssociate => {
          return `
            <p class="mar0">${currentAssociate.name}</p>
          `
        })
        .join("")}
    </dialog>
  `
}

// let xOut = document.getElementById("miniModal")

// function closeXout() {
//   let xOut = document.getElementById("miniModal")
//   xOut.close()
// }
