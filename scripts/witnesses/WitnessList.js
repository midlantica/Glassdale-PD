import { Witness } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessProvider.js"

const contentTarget = document.querySelector(".witnessStatements")
const eventHub = document.querySelector(".container")

// eventHub.addEventListener("witnessStatementChanged", customEvent => {
//   render()
// })

let youCanSeeMe = true

eventHub.addEventListener("witnessButtonClicked", customEvent => {
  youCanSeeMe = !youCanSeeMe

  if (youCanSeeMe) {
    contentTarget.classList.remove("hide")
  } else {
    contentTarget.classList.add("hide")
    render()
  }
})

const render = () => {
  if (youCanSeeMe) {
    contentTarget.classList.remove("hide")
  } else {
    contentTarget.classList.add("hide")
  }

  getWitnesses().then(() => {
    const allTheWitnesses = useWitnesses()

    contentTarget.innerHTML = allTheWitnesses
      .map(currentWitnessStatementObject => {
        const statementHTML = Witness(currentWitnessStatementObject)
        return statementHTML
      })
      .join("")
  })
}

export const WitnessList = () => {
  render()
}
