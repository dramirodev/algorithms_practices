function returnTheFirstTwoNames(names: string[]): string[] {
  return names.slice(0, 2);
}

function returnLastName(names: string[]): string {
  return names[names.length - 1];
}

function transformArrayToString(a: string[]): string {
  return (a).join(", ");
}


export const likes = (a: string[]): string => {
  const message = "like this";
  const length = a.length;
  const staticPart = `and ${returnLastName(a)} ${message}`;
  const firstTwoNames = length >= 3 ? transformArrayToString(returnTheFirstTwoNames(a)) : '';
  const totalOthers = length - 2;
  const firstNamePart = length < 3 ? a[0] : firstTwoNames;

  if (length <= 3) {
    const messages: Record<number, string> = {
      0: "no one likes this",
      1: `${firstNamePart} likes this`,
      2: `${firstNamePart} ${staticPart}`,
      3: `${firstTwoNames} ${staticPart}`
    };

    return messages[length];
  }


  return `${firstTwoNames} and ${totalOthers} others ${message}`;

};