var program = require('commander'),
    generate = require('./generate'),
    commands = require('./commands'),
    pkg = require('../package.json');

// Version
program
    .version('relish-phaser-project ' + pkg.version)
    .usage('[command] [options]\n\n  Command-Specific Help\n\n    phaser [command] --help');

// Generator
program
  .command('g')
  .alias('generate')
  .description('Generate a new scene or extended class')
  .usage('[type:[name|/nested/folder/to/name]]' +
      '\n\n  Available types: ' +
      '\n\n     sprite         Generate extended sprite' +
      '\n                    phaser g sprite:/entities/entity -> scripts/entities/entity.js' +
      '\n\n     state          Generate a new state' +
      '\n                    phaser g state:menu -> states/menu.js')
  .action(generate);

// Run cli
program.parse(process.argv);
