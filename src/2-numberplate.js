function formatVanityPlate(string) {
  let words = string.split(' ')
  console.log(words)
  const newWords = words.map((word) => {
  	if (word === 'for') {
  		word = '4'
  	} 
  	if (word === 'to'){
  		word = '2'
  	}
  	return word
  })

  words = newWords.map(word => word.toUpperCase())
  let chars = words.join('').split('')
  if(chars.length > 12){
  	for (var i = chars.length - 13; i >= 0; i--) {
  		chars.pop();
  	}
  }
  return chars.join('')
}

const one = 'I like money'
console.log(`Number plate: ${ formatVanityPlate(one) }`)

const two = 'Cats for life'
console.log(`Number plate: ${ formatVanityPlate(two) }`)

const three = 'Cats to dogsssssssss'
console.log(`Number plate: ${ formatVanityPlate(three) }`)

const four = '1234567890123456'
console.log(`Number plate: ${ formatVanityPlate(four) }`)


/*

Challenges:
1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/