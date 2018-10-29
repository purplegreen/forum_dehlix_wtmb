module.exports = class User {
    constructor (name, profileicon) {
    this.name = name
    this.profileicon = profileicon
<<<<<<< HEAD
   this.post = []
=======
    this.post = []
>>>>>>> 6fcc29218dbcbbab4737761b6611d775205f6b8a
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
<<<<<<< HEAD
        thumb(post, interact){
        post.interactions.push(interact)    
        this.interactionsGiven.push(interact)
        } 
=======
        // thumb(post, interact){
        // post.interactions.push(interact)    
        // this.interactionsGiven.push(interact)
        // } 
>>>>>>> 6fcc29218dbcbbab4737761b6611d775205f6b8a
  }
  

