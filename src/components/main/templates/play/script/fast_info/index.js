export default function infoRapidas() {
 document.querySelectorAll('.nomes-modelos').forEach((td, index) =>{
   const span = [...td.childNodes]
   td.onmousemove = (e) => {
     span[2].style.color = 'green'
     document.getElementById(`info-rapida-carro${index}`).style.display = 'block'
     document.getElementById(`info-rapida-carro${index}`).style.left = `${e.clientX / 40}px`
     document.getElementById(`info-rapida-carro${index}`).style.top = `${e.clientY / 12}px`
   }
   td.onmouseleave = () => {
     span[2].style.color = 'red'
     document.getElementById(`info-rapida-carro${index}`).style.display = 'none'
   }
 })
}
