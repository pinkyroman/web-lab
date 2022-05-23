# VSCode 에서 ESLint 와 Prettier 사용하여 TypeScript 개발하기

참고 자료: [VSCode에서 ESLint와 Prettier (+ TypeScript) 사용하기](https://velog.io/@das01063/VSCode%EC%97%90%EC%84%9C-ESLint%EC%99%80-Prettier-TypeScript-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

## 1. VSCode 확장 설치

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 2. 프로젝트 준비

```
$ mkdir <프로젝트 디렉터리>
$ cd <프로젝트 디렉터리>
$ npm init -y
$ npm i -D typescript
$ npm i -D @tsconfig/node16-strictest-esm
$ mkdir src dist
```

### 2-1. .gitignore 파일 추가

```
node_modules
```

### 2-2. tsconfig.json 파일 추가

```
{
    "extends": "./node_modules/@tsconfig/node16-strictest-esm/tsconfig.json"
    "include": [
        "src/**/*.ts"
    ],
    "compilerOptions": {
        "outDir": "dist",
        "importsNotUsedAsValues": "remove",
        "isolatedModules": false,
        "experimentalDecorators": true,
        "strictNullChecks": true
    },
}
```

### 2-3. package.json 수정

```
{
    ...
    "type": "module",
    ...
    "scripts": [
        "dev": "clear && tsc && node dist/app.js",
        ...
    ],
}
```

## 3. ESLint 설치 및 설정

### 3-1. ESLint 설치

```
$ npm i -D eslint
```

### 3-2. ESLint 설정

```
$ npx eslint --init

또는

$ npm init @eslint/config
```

설정 예:

```
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2 @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
Installing @typescript-eslint/eslint-plugin@latest, eslint-config-airbnb-base@latest, eslint@^7.32.0 || ^8.2.0, eslint-plugin-import@^2.25.2, @typescript-eslint/parser@latest

added 103 packages, and audited 188 packages in 4s

62 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Successfully created .eslintrc.json file in ...
```

## 4. Prettier 설치 및 설정

### 4-1. Prettier 설치

```
$ npm i -D prettier
$ npm i -D eslint-config-prettier eslint-plugin-prettier
```

## 5. VSCode 의 settings.json

다음의 설정 값 확인. 없으면 추가하고, 있으나 설정 값이 다르면 수정.

```
    ...
    "editor.formatOnSave": true,
    "prettier.singleQuote": true,
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    ...
```
