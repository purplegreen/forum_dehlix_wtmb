module.exports = class  Post {
    constructor (title, entry){
        this.title = title
        this.entry = entry
        this.interactions = []
         }

         addinteraction(interact) {
             this.interactions.push(interact)
         }
}
