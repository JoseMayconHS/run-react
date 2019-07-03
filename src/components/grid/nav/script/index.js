export default function (cs = null) {
  if (cs === null) {
    document.getElementById('nav').childNodes.forEach(a => {
      a.classList.remove('selected')
    })
  } else {
    document.getElementById('nav').childNodes.forEach(a => {
      if (a.className === cs) a.classList.add('selected')
      else a.classList.remove('selected')
    })
  }
}
