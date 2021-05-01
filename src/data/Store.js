// Define class Store Singleton
class Store {
  constructor () {
    this.state = {
      count: 0
    }
  }

  // methods
  update (val) {
    this.state.count += val
    // console.log(`Store updatted by: ${val}`) // !DEBUG
    // console.log(`Store value is now: ${this.state.count}`) // !DEBUG
  }

  restore () { this.state.count = 0 }
}

// export new class instance
export default new Store()
