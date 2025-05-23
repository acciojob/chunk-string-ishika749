function chunkString(str, chunkLength) {
  // If input is null, return an empty array
  if (str === null) return [];

  const result = [];
  
  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.slice(i, i + chunkLength));
  }
  
  return result;
}

// Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
