import { ConvictionHtml } from "./Conviction.js"
import { useConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector(".convictionsContainer article")
export const ConvictionList = () => {
  const ConvictionItems = useConvictions()

  for (const item of ConvictionItems) {
    contentTarget.innerHTML += ConvictionHtml(item)
  }
}
