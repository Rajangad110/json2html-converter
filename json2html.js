// json2html.js

export default function json2html(data) {
  // Extract all unique keys for the table header
  const headers = [...new Set(data.flatMap(Object.keys))];

  // Begin constructing the HTML table
  let html = `<table data-user="raj0123angad@gmail.com">`;
  
  // Generate table header
  html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;
  
  // Generate table body
  html += `<tbody>`;
  data.forEach(row => {
    html += `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
  });
  html += `</tbody></table>`;
  
  return html;
}
