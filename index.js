const reduxTsc = require("./src/reduxTsc-rule");
const importRule = require("./src/importRule");

module.exports = {
  meta: {
    name: "eslint-plugin-redux-tsc",
    version: "1.0.1",
  },
  rules: {
    "enforce-hooks": reduxTsc,
    "restrict-react-redux": importRule,
  },
};
