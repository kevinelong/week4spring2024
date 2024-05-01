

const corpus = `Now is the time for all good people to come to the aid of their planet.`;

console.log(corpus[0])
// corpus[0] = "W" //NO WORKY; NO ERROR;

console.log(corpus[corpus.length - 1]) //last one

console.log(corpus.indexOf("p")) //where is people? 

console.log(corpus.indexOf("planet")) //where is planet? 

console.log(corpus.indexOf("is the")) //where does "is the" start expect 4

console.log(corpus[corpus.indexOf("is the")] )