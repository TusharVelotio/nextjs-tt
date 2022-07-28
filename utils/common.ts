export function getInitialsFromName(name: string): string {
  const nameArraySplitted = name.split(' ')
  return `${nameArraySplitted?.[0]?.[0]}${
    nameArraySplitted.length > 1
      ? nameArraySplitted?.[nameArraySplitted?.length - 1]?.[0]
      : ''
  }`
}

export function roundOff(number: number) {
  return number ? Math.round(number * 100) / 100 : ''
}

export function formatInCr(number: number) {
  if (!number) {
    return ''
  }
  const formattedInCr = number / 100
  return roundOff(formattedInCr)
}

export function generateRandomNumberFromRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
}
