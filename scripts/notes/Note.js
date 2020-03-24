// let date = new Date(UNIX_Timestamp * 1000)
export const NotesHtml = (noteObj, criminal) => {
  return `
    <div class="panel">
      <h4>${criminal.name}</h4>
      <table>
        <tr>
          <td>Note:</td>
          <td>${noteObj.noteText}</td>
        </tr>
        <tr>
          <td>Timestamp:</td>
          <td>${new Date(noteObj.timestamp).toLocaleDateString()}</td></td>
        </tr>
      </table>
    </div>
  </div>
  `
}
