function getMinMax(string) { 
    const re = /,|\s+/g;
    let numbers = string.split(re).filter( item => !isNaN(item) );
    console.log("numbers"+numbers);
    return { min: Math.min(...numbers), max: Math.max(...numbers)}
  }
  