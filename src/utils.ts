export function extractFirstLetter(str: string) {
  const regex = /\w+/g;
  let matches = str.match(regex);

  if (matches === null) return;

  return matches.map((word) => word[0].toUpperCase()).join("");
}
