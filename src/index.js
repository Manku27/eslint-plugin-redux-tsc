const reduxTsc = require("./reduxTsc-rule");
const importRule = require("./importRule");

module.exports = {
  meta: {
    name: "eslint-plugin-redux-tsc",
    version: "1.0.0",
  },
  rules: {
    "enforce-hooks": reduxTsc,
    "restrict-react-redux": importRule,
  },
};
