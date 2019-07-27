export default function (pilots) {
  const keys = {
    cars: [],
    pilots: []
  }

  for (let p = 0; p < pilots; p++) {
    keys.cars.push(document.getElementById(`c${p}`).value)
    keys.pilots.push(document.getElementById(`p${p}`).value)
  }

  return keys
}
