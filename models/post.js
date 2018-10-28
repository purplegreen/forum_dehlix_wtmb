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
            console.log(this.title), 
            'this is a new Post',(this.entry), 
            'which recieved this number of interactions', (this.interactions.length)
        }
        }
