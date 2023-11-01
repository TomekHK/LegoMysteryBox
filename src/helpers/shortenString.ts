function shortenString(inputString: string): string {
  const parts = inputString.split(", ");

  if (parts.length >= 2) {
    return `${parts[0]}, ${parts[1]}`;
  } else {
    return inputString;
  }
}
export default shortenString;
