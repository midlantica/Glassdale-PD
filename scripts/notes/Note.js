export const NotesHtml = noteObj => {
  return `
    <div class="panel">
      <h4>${noteObj.criminal}</h4>
      <table>
        <tr>
          <td>Note:</td>
          <td>${noteObj.noteText}</td>
        </tr>
        <tr>
          <td>Timestamp:</td>
          <td>${noteObj.timeStamp}</td></td>
        </tr>
      </table>
    </div>
  `
}
