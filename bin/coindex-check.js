const program = require('commander')
const c = require('../commands/check')

program
    .command('price')
    .description('Check price of coins')
    .option(
        '--coin <type>',
        'Add specific coin types in CSV format',
        'BTC,ETH,XRP'
    )
    .option('--cur <currency>', 'Change the currency', 'USD')
    .action(() => check.price())

program.parse(process.argv)