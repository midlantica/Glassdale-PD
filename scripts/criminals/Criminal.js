export const CriminalHtml = criminalObj => {
  return `
  <div class="panel">
    <h4>${criminalObj.name}</h4>
    <table>
      <tr>
        <td>Age:</td>
        <td>${criminalObj.age}</td>
      </tr>
      <tr>
        <td>Crime:</td>
        <td>${criminalObj.conviction}</td>
      </tr>
      <tr>
        <td>Term&nbsp;Start:</td>
        <td>${new Date(criminalObj.incarceration.start).toLocaleDateString("en-US")}</td>
      </tr>
      <tr>
        <td>Term&nbsp;End:</td>
        <td>${new Date(criminalObj.incarceration.end).toLocaleDateString("en-US")}</td>
      </tr>
    </table>
    <button id="associates--${criminalObj.id}" class="padTBQ padLRH">See Associates</button>
  </div>
`
}
