function move(elemento, inicio, fim, passo, callback) {
  const novoInicio = inicio - passo
  if (novoInicio > fim) {
    elemento.style.left = `${novoInicio}px`
    setTimeout(() => move(elemento, novoInicio, fim, passo, callback), 7)
  } else {
    callback()
  }
}

export default function slide() {
  const nodeList = document.querySelectorAll('.apresentacao-slide')
  const spans = Array.from(nodeList)

  exibirSlider(spans, spans[0])
}

function exibirSlider(spans, spanAtual) {
  try {
    spanAtual.style.display = 'block'
    const inicio = document.querySelector('.area-slide').clientWidth + 20
    const fim = -spanAtual.clientWidth

    move(spanAtual, inicio, fim, 1, () => {
      spanAtual.style.display = 'none'
      exibirSlider(spans, getProximo(spans, spanAtual))
    })
  } catch(e) {
    return
  }
}

function getProximo(spans, spanAtual) {
  const proximoSpan = spans.indexOf(spanAtual) + 1

  if (proximoSpan < spans.length) {
    return spans[proximoSpan]
  } else {
    return spans[0]
  }
}






















// html += `<span apresentacao-slide>Bem-vindo(a) ${usuario !== ''? usuario: 'Anônimo'}</span>`
// html += '<span apresentacao-slide>Criado por Maycon Silva</span>'
// if (data.getHours() < 12) {
//   html += `<span apresentacao-slide>Tenha um bom dia!</span>`
// } else if (data.getHours() < 18) {
//   html += `<span apresentacao-slide>Tenha uma boa tarde!</span>`
// } else {
//   html += `<span apresentacao-slide>Tenha uma boa noite!</span>`
// }
// html += `<span apresentacao-slide>${data.getDay() < 10? '0' + data.getDay(): data.getDay()}/${data.getMonth() + 1 < 10? '0' + (data.getMonth() + 1): data.getMonth()}/${data.getFullYear()}</span>`
// html += '</div></div>'
