
// FORum A Discussion Platform developed at WTM Berlin 2018 //

const User = require('./models/user')
const Post = require('./models/post')
const UserInteraction = require('./interactions/user-interactions')
// const Chalk = require('chalk')

console.log('I am ready')

async function main() {
const deh = new User ('DehLix', '^_^')
const stella = new User ('Stella', ';)')
const juno = new User ('Juno', ':)')


//interactions //
const loveit = new Interaction ("Love It")
const notreally = new Interaction ("Not Really")
const checkmypost = new Interaction ("I have something to say")


const postToothbrushes = new Post ("Toothbrushes", "Take a bamboo one ! You will just have to remove the bristles before putting them into a recycling bin.")
deh.interactionsGiven(postToothbrushes)
stella.interactionsGiven(postToothbrushes)
juno.interactionsGiven(postToothbrushes)


await UserInteraction.add(deh)
await UserInteraction.add(stella)
await UserInteraction.add(juno)
const allUsers = await UserInteraction.findAll()

console.log(allUsers[0].name)

}

main()




// //post 1 and interaction //

// stella.posted(post1)
// console.log(stella, post1)

// deh.thumb(post1, checkmypost)
// console.log(deh)

// juno.thumb(post1, loveit)
// console.log(juno)



// //post 2 and interaction //

// deh.posted(post2)
// console.log(deh, post2)


// juno.thumb(post2, checkmypost)
// console.log(Chalk.yellow.bgBlue.bold(juno))

// stella.thumb(post2, loveit)
// console.log(Chalk.magenta.underline.bold(stella))

// Database.save(post1)
// const loadedFile = Database.load()
// console.log(loadedFile.interactionsGiven)


