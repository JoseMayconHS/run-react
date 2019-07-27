export default function () {
  this.segundos = 0
  this.minutos = 0
  this.horas = 0
  this.allTime = 0

  this.setTempo = () => {
    this.allTime += 1
    if (this.segundos <= 60) this.segundos += 1
    if (this.segundos === 60) {
      this.minutos += 1
      this.segundos = 0
    }
    if (this.minutos === 60) {
      this.horas += 1
      this.minutos = 0
    }
  }

  this.getTempo = () => {
    return `${this.horas < 10? '0' + this.horas: this.horas}:${this.minutos < 10? '0' + this.minutos: this.minutos}:${this.segundos < 10? '0' + this.segundos: this.segundos}`
  }

  this.reset = () => {
    this.allTime = 0
    this.segundos = 0
    this.minutos = 0
    this.horas = 0
  }
}
