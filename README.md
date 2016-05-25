# exclude-extensions-from-require
Exclude files being required by extension.

The use-case for this is when you are sharing code for Node and the browser.
You end up using Webpack or Browserify to bundle the requires together.
They both can support including files that aren't JavaScript.
For example, Webpack allows you to include CSS files which are then outputted into a single CSS file.

On Node, the default is to load these files as JavaScript which will cause an error.
In your Node app, you can use this module to tell Node to simple ignore those files.

## Usage

```javascript
const excludeExtensionsFromRequire = require('exclude-extensions-from-require');
excludeExtensionsFromRequire(['scss', 'css']);

//...
require('reset.css'); // Nothing happens

```
