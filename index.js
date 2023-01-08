function loadXMLDoc(filename) {
  if (window.ActiveXObject) {
    xhttp = new ActiveXObject('Msxml2.XMLHTTP')
  } else {
    xhttp = new XMLHttpRequest()
  }
  xhttp.open('GET', filename, false)
  try {
    xhttp.responseType = 'msxml-document'
  } catch (err) {} // Helping IE11
  xhttp.send('')
  return xhttp.responseXML
}

function displayResult() {
  xml = loadXMLDoc('cursos.xml')
  xsl = loadXMLDoc('xstyle.xsl')
  // code for IE
  if (window.ActiveXObject || xhttp.responseType == 'msxml-document') {
    ex = xml.transformNode(xsl)
    document.getElementById('root').innerHTML = ex
  }
  // code for Chrome, Firefox, Opera, etc.
  else if (document.implementation && document.implementation.createDocument) {
    xsltProcessor = new XSLTProcessor()
    xsltProcessor.importStylesheet(xsl)
    resultDocument = xsltProcessor.transformToFragment(xml, document)
    console.log(resultDocument)
    document.getElementById('root').appendChild(resultDocument)
  }
}

function openSearch() {
  xml = loadXMLDoc('cursos.xml')
  xsl = loadXMLDoc('xstyle.xsl')
  const suject = document.querySelector('#suject-sel').value
  const instructor = document.querySelector('#instructor-sel').value
  const units = document.querySelector('#units-sel').value

  const courses = document.getElementsByClassName('courses-container')

  console.log({
    suject,instructor,units
  })

  // Recorrer las filas de la tabla
  if (suject != "All") {
    courses[0].childNodes.forEach(course => {
      if(course.textContent.length != 1){
        var subjCell = course.getElementsByClassName("subj-key-selector")[0];
        var value_subjCell = subjCell.getElementsByTagName("span")[1].innerHTML
        course.style.display = (value_subjCell == suject)? "":"none";  
      }
    })
  }

  if (instructor != "All") {
    courses[0].childNodes.forEach(course => {
    if(course.textContent.length != 1){
        var instructorCell = course.getElementsByClassName("instructor-key-selector")[0];
        var value_instructorCell = instructorCell.getElementsByTagName("span")[1].innerHTML
        course.style.display = (value_instructorCell == instructor)? "":"none"; 
    }
    })
  }

  if (units != "All") {
    courses[0].childNodes.forEach(course => {
      if(course.textContent.length != 1){
        var unitsCell = course.getElementsByClassName("units-key-selector")[0];
        var value_unitsCell = unitsCell.getElementsByTagName("span")[1].innerHTML
        course.style.display = (value_unitsCell == units)? "":"none";
      }
    })
  }

}