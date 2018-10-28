module.exports = class  Post {
    constructor (title, entry){
        this.title = title
        this.entry = entry
        this.interactions = []
         }

         addinteraction(interact) {
             this.interactions.push(interact)
         }
         report() {
            console.log(chalk.blue.bgRed.bold(this.title), 
            'this is a new Post', chalk.green(this.entry), 
            'which recieved this number of interactions', this.interactions.length)
        }
        }
