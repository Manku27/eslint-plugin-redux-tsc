const baseRule = require("@typescript-eslint/eslint-plugin").rules[
  "no-restricted-imports"
];

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Wrapper for @typescript-eslint/no-restricted-imports to stop importing useSelector and useDispatch",
    },
    schema: baseRule.meta.schema,
    messages: {
      customMessage:
        "Use typed hooks `useAppDispatch` and `useAppSelector` instead of `useDispatch` and `useSelector` from `react-redux`.",
    },
  },
  create(context, options) {
    const baseRuleListener = baseRule.create(context);

    return {
      ImportDeclaration(node) {
        if (node.source.value === "react-redux") {
          node.specifiers.forEach((specifier) => {
            if (
              specifier.imported &&
              ["useSelector", "useDispatch"].includes(specifier.imported.name)
            ) {
              context.report({
                node: specifier,
                messageId: "customMessage",
              });
            }
          });
        }

        // Call the original rule's listener
        if (baseRuleListener.ImportDeclaration) {
          baseRuleListener.ImportDeclaration(node);
        }
      },
    };
  },
};
