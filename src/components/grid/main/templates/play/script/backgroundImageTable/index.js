import data from '../../data/index.json'

const box = {
  m10: {
    shadow: '0px 0px 10px white',
    border: '4px solid white'
  },
  m20: {
    shadow: '0px 0px 10px yellow',
    border: '4px solid yellow'
  },
  m30: {
    shadow: '0px 0px 10px green',
    border: '4px solid green'
  },
  m40: {
    shadow: '0px 0px 10px black',
    border: '4px solid black'
  },
  m50: {
    shadow: '0px 0px 10px purple',
    border: '4px solid purple'
  }
}

export function start() {
  document.querySelectorAll('.area-select').forEach((area, index) => {

    const child = Array.from(area.childNodes)
    const select = Array.from(child[1].childNodes)

    const div = document.getElementById(`div-select${index}`)

    setBackground(data.pilots[select[1].value][4], div)
    setShadow(data.pilots[select[1].value][3], div)

  })

  setEvent()
}

function setShadow(value, div) {
  if (value < 10) {
    div.style.boxShadow = box.m10.shadow
    div.style.border = box.m10.border
  } else if (value < 20) {
    div.style.boxShadow = box.m20.shadow
    div.style.border = box.m20.border
  } else if (value < 30) {
    div.style.boxShadow = box.m30.shadow
    div.style.border = box.m30.border
  } else if (value < 40) {
    div.style.boxShadow = box.m40.shadow
    div.style.border = box.m40.border
  } else {
    div.style.boxShadow = box.m40.shadow
    div.style.border = box.m50.border
  }
}

function setBackground(img, div) {
  div.style.backgroundImage = `url(./imgs/pilots/${img}.jpg)`
  div.style.backgroundRepeat = 'no-repeat'
  div.style.backgroundSize = '100% 100%'
  div.style.backgroundPosition = 'cover'
}

export default function setEvent() {
  document.querySelectorAll('.area-select').forEach((div, index) => {

    const child = Array.from(div.childNodes)
    const select = Array.from(child[1].childNodes)

    select[1].addEventListener('change', () => {
      const div = document.getElementById(`div-select${index}`)

      setBackground(data.pilots[select[1].value][4], div)
      setShadow(data.pilots[select[1].value][3], div)
    })
  })
}
