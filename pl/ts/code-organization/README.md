TSConfig Base 설치:
```
$ npm install --save-dev @tsconfig/node16-strictest-esm
```

tsconfig.json:
```
{
  "extends": "@tsconfig/node16-strictest-esm/tsconfig.json",
  "include": [
    "src/**/*.ts"
  ],
  "compilerOptions": {
    "outDir": "dist",
  }  
}
```