// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (ony share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')
sayHi("serena")
sayHi(names.john)
sayHi(names.peter)
