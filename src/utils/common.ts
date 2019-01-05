export function toUpper(word: string, isPlural?: boolean) {
  const newWord = word.replace(/( |^)[a-z]/g, (L: string) => L.toUpperCase())
  if (!isPlural) return newWord
  switch (newWord) {
    case 'Classify': return 'Classifies';
    default: return `${newWord}s`
  }
}