import { ConvictionHtml } from './Conviction.js'
import { useConviction } from './ConvictionDataProvider.js'

const contentTarget = document.querySelector('.filter filters__incarceration')
export const ConvictionList = () => {
  const ConvictionItems = useConviction()

  for (const item of ConvictionItems) {
    contentTarget.innerHTML += ConvictionHtml(item)
  }
}
