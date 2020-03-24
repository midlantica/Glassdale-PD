let witnesses = []

const eventHub = document.querySelector(".ContainBox .witnesses")

const dispatchStateChangeEvent = () => {
  const witnessStatementChangedEvent = new CustomEvent("witnessStatementChangedChanged")

  eventHub.dispatchEvent(witnessStatementChangedEvent)
}

// Allow other modules to get a copy of the data
export const useWitnesses = () => witnesses.slice()

// Get witness data state from API
export const getWitnesses = () => {
  return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(parsedWitnesses => {
      witnesses = parsedWitnesses
    })
}
