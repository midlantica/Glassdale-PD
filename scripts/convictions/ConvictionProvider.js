let conviction = []
export const useConvictions = () => {
  return conviction.slice()
}
export const getConvictions = () => {
  return fetch("https://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(parsedConvictions => {
      // console.table(parsedConvictions)
      conviction = parsedConvictions
    })
}
