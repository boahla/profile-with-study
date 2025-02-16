function repeat(word: string, times = 2) {
  const words: string[] = [];
  for (let i = 0; i < times; i++) {
    words.push(word);
  }
  return words;
}

export default repeat;
