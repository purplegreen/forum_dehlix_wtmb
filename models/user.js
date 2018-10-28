module.exports = class User {
    constructor (name, profileicon) {
    this.name = name
    this.profileicon = profileicon
    this.post = []
    this.interactionsGiven = []
        }

        // posted(Post){
        // this.post.push(Post)
        // }
        
        posted(post){
            post.nowposted.push(this)
        }

        static create({name, profileicon}) {
            return new User(name, profileicon);
        }
        // thumb(post, interact){
        // post.interactions.push(interact)    
        // this.interactionsGiven.push(interact)
        // } 
  }
  

