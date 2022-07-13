import { Computer } from './computer.js'
class Mibook extends Computer {
    constructor(name, company){
        super(name)
        this.company = company
    }
    logIn() {
        console.log("You are logged into a Mibook" + this.name)
    }
}

export default Mibook