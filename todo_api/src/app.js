import yargs from 'yargs';

import {bootstrap} from './cli';

yargs.strict().command(
    'bootstrap [port] [host]',
    'Bootstrap application',
    (setup) => {
      setup
          .positional('port', {
            type: 'number',
            default: 8000,
            description: 'Port',
          })
          .positional('host', {
            type: 'string',
            default: '::',
            description: 'Host',
          });
    },
    async (args) => {
      await bootstrap(Number(args.port), args.host);
    },
).argv;
