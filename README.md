# WaveSMS

Powered by [wavecell](http://wavecell.com).

### Getting up and running
-----

**Requirements**
- `node.js` ~= 4.1.xx
- `npm` ~= 2.14.xx

**Global Dependencies**
- gulp: `npm install -g gulp` 
- napa: `npm install -g napa`

**Contributing**

1. Clone this repo from `https://github.com/rtorino/wave-sms.git`
2. Run `npm install` from the root directory
3. Run `gulp dev` (may require installing Gulp globally `npm install gulp -g`)
4. Your browser will automatically be opened and directed to the browser-sync proxy address
5. To prepare assets for production, run the `gulp prod` task (Note: the production task does not fire up the express server, and won't provide you with browser-sync's live reloading. Simply use `gulp dev` during development. More information below)

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/www` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.
