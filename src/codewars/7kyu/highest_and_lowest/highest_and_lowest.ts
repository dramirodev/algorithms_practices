export function highAndLow(numbers: string){

  const numberList = numbers.split(' ');

  let minor = Number(numberList[0]);
  let major = Number(numberList[0]);

  for(const number of numberList){
    const currentNumber = Number(number)

    if(currentNumber > major){
      major = currentNumber;
    }


    if(currentNumber < minor){
      minor = currentNumber;
    }
  }

  return `${major} ${minor}`;
}