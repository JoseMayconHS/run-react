export default function () {
  document.querySelector('.area-selects').childNodes.forEach(div => {

    const area_select = Array.from(div.childNodes)

    const select = Array.from(area_select[1].childNodes)

    select[1].classList.remove('pilot-invalid')
  })
}
