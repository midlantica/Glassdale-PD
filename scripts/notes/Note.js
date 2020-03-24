// let date = new Date(UNIX_Timestamp * 1000)
export const NotesHtml = (noteObj, criminal) => {
  return `
  <h4>Notes</h4>
  <div class="noteForm__button"></div>
  <div class="noteForm"></div>
  <div class="grid notesList">
    <div class="panel">
      <h4>${criminal.name}</h4>
      <table>
        <tr>
          <td>Note:</td>
          <td>${noteObj.noteText}</td>
        </tr>
        <tr>
          <td>Timestamp:</td>
          <td>${noteObj.timestamp}</td></td>
        </tr>
      </table>
    </div>
  </div>
  `
}
