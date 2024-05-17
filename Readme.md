# eslint-plugin-redux-tsc

## Usage

`npm install eslint-plugin-redux-tsc --save`

Or

`yarn add --dev eslint eslint-plugin-jest`

In `.eslintrc`

```
plugins : [
            // other plugins,
            "redux-tsc"
          ],
rules :   {
           // other rules,
           "trinity-eslint/reduxTsc": "error",
           "trinity-eslint/importRule": "error"
          }
```

## Output

![Linthook](https://github.com/Manku27/eslint-plugin-redux-tsc/assets/22219286/97cd7e09-b666-4195-939a-f55dfce5e78b)

&&

![LintImport](https://github.com/Manku27/eslint-plugin-redux-tsc/assets/22219286/8d145789-72ad-43d0-ba5f-292e76f1126f)

## Why

Redux strongly recommends using typed hooks when using with typescript projects.

Following their [documentation](https://redux.js.org/usage/usage-with-typescript#define-typed-hooks) ,
we add these Typed-hooks which look something of the sort of `useAppSelector and useAppDispatch` which are to be used against the `useSelector and useDispatch`, for `React` via `react-redux`.

One way, the documentation suggests is to restrict imports via `@typescript-eslint/eslint-plugin`, which I find verbose.
I have wrapped on it to extend import restriction while also adding lint errors on the hook too.
