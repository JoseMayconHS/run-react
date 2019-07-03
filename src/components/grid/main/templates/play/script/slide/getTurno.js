export default function () {
  const data = new Date()
  if (data.getHours() < 12) return 'Bom dia'
  if (data.getHours() >= 12 && data.getHours() < 18) return 'Boa tarde'
  return 'Boa noite'
}
