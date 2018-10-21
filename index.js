
const User = require('./user')
const Post = require('./post')
const Interaction = require('./interactions')
const Chalk = require('chalk')
const Database = require('./database')


// FORum A Discussion Platform developed at WTM Berlin 2018 //

//users //

var deh = new User ('DehLix', '^_^')
var stella = new User ('Stella', ';)')
var juno = new User ('Juno', ':)')


//posts //

var post1 = new Post ("Disposable", "We produce 300million tons of plastic every year and half of it is meant to be used only once.")
var post2 = new Post ("Bring Your Own", "I think most of us are now familiar with this tip. Instead of buying a new plastic bag from the cashier every time you do your groceries, bring your own !")
var post3 = new Post ("Toothbrushes", "Take a bamboo one ! You will just have to remove the bristles before putting them into a recycling bin.")
var post4 = new Post ("Sponges", "those eco-friendly solutions work better than traditional sponges.")
var post5 = new Post ("Lifestyle", "In fact, most of our plastic litter is currently floating around in the sea and at least 8 million tons of plastic ads up every year. Yum !")


//interactions //

var loveit = new Interaction ("Love It")
var notreally = new Interaction ("Not Really")
var checkmypost = new Interaction ("I have something to say")






//post 1 and interaction //

stella.posted(post1)
console.log(stella, post1)

deh.thumb(post1, checkmypost)
console.log(deh)

juno.thumb(post1, loveit)
console.log(juno)



//post 2 and interaction //

deh.posted(post2)
console.log(deh, post2)


juno.thumb(post2, checkmypost)
console.log(Chalk.yellow.bgBlue.bold(juno))

stella.thumb(post2, loveit)
console.log(Chalk.magenta.underline.bold(stella))

Database.save(post1)
const loadedFile = Database.load()
console.log(loadedFile.interactionsGiven)


