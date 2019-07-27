/* Som do nitro */ import som_nitro from '../../sons/nitro.mp3'
/* Som da corrida */ import som_corrida from '../../sons/corrida.mp3'
/* Som ao parar */ import som_parar from '../../sons/pararBatendo.mp3'
/* Som ao término */ import som_fim from '../../sons/fimCorrida.mp3'

const sons = [som_corrida, som_parar, som_fim]

export function somCorrida(som) {
  document.getElementById('som-corrida').innerHTML = `<audio autoplay><source src=${sons[som]} type='audio/ogg'></audio>`
}


export function somNitro(index) {
  document.getElementById(`som-nitro${index}`).innerHTML = `<audio autoplay><source src=${som_nitro} type='audio/ogg'></audio>`
}
