const contentTarget = document.querySelector(".criminals__button")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "showAllCriminals") {
    // Create a custom event to tell any interested component that the user wants to see Criminals
    const allCriminalsEvent = new CustomEvent("allCriminalsClicked")

    // Dispatch it to event hub
    eventHub.dispatchEvent(allCriminalsEvent)
  }
})

export const DisplayCriminalsButton = () => {
  contentTarget.innerHTML =
    "<button id='showAllCriminals' class='btnSmall marBH'>Show All Criminals</button>"
}
