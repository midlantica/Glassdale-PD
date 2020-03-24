export const Witness = witness => {
  return `
  <div class="panel">
    <div class="statement">
      <h4>${witness.name}</h4>
      <p>${witness.statements}</p>
    </div>
  </div>
  `
}
