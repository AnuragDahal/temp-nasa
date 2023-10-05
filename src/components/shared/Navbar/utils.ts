export const splitWordsIntoPaths = (words: string[]) => {
    const eachPaths: string[] = [];
    words.forEach((word, index) => {
      if (word) {
        if (index == 1) {
          eachPaths[index] = `/${word}`;
        } else {
          eachPaths[index] = `${eachPaths[index - 1]}/${word}`;
        }
      }
    });
    return eachPaths;
  };