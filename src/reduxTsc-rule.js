module.exports = {
  meta: {
    type: "problem",
    messages: {
      dispatch: "Use useAppDispatch instead",
      selector: "Use useAppSelector instead",
    },
    fixable: "code",
  },
  create: function (context) {
    return {
      CallExpression(node) {
        if (node.callee.name === "useDispatch") {
          context.report({
            node,
            messageId: "dispatch",
            fix(fixer) {
              return [fixer.replaceTextRange(node.range, "useAppDispatch()")];
            },
          });
        } else if (node.callee.name === "useSelector") {
          context.report({
            node,
            messageId: "selector",
            fix(fixer) {
              return [
                fixer.replaceTextRange(
                  [node.range[0], node.range[0] + 38],
                  "useAppSelector(state"
                ),
              ];
            },
          });
        }
      },
    };
  },
};
