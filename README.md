# eslint-underscore_case

ESLint plugin to enforce "underscore_case" (different from snake_case).


## What is UnderScore_Case

underscore_case is similar to snake_case but allows uppercase characters.


## Why

I'm not a massive fan of this style, but I am a massive fan of consistency.


## Examples of underscore_case

The following two are valid underscore_case:

```
Hello_World
hello_world
```

Please note that: snake_case is also valid underscore_case.


## Usage

```
yarn add --dev eslint-underscore_case
```

```json
// .eslintrc.json
"plugins": [
  "underscore_case"
],
"rules": {
  "underscore_case/underscore_case": [
    "error",
    "always"
  ]
}
```
