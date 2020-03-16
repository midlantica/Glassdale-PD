export const NotesHtml = noteObj => {
  return `
    <div class="panel">
      <h5>${noteObj.name}</h5>
      <table>
        <tr>
          <td>Age:</td>
          <td>${noteObj.criminal}</td>
        </tr>
        <tr>
          <td>Crime:</td>
          <td>${noteObj.noteText}</td>
        </tr>
        <tr>
          <td>Term&nbsp;Start:</td>
          <td>${noteObj.timeStamp}</td>}</td>
        </tr>
      </table>
    </div>
  `
}
