---
title: How jest.mock() works
date: 2020-01-11
---

---

### Jest.mock()

- Jest.mock is the inevitable jest api when unit testing javascript
- It can be configured to mock module.export, named export, default exports etc

---

### How jest replaces this

![makeChristmasCard console](./jestMockDiagram.png)

#### Step 1. Making the AST

- Node will only understand the es5
- For this we need some compiler - here we use babel for converting all these file to es5
- Setting up babel configuration for the test environment will depends upon the project

#### Step 2. Replacing with the mock

- This is the important step
- Here the AST created in step one is modified
- This is done by the plugin `babel-plugin-jest-hoist`
- The mock functions replaces the actual code

#### Step 3. Create code

- Here according to the new AST code is generated

### My small babel plugin doing a mocking functionality

<style>
.gist {
    width:100%;
    height: 40vh;
}
</style>

<a target="_blank" href="https://astexplorer.net/#/gist/79fab5c9ec6d83c239b071f37a3f7e8c/bacf48cbaf802d41c73dfd9d9c72d639a4171380">See in AST explorer</a>

<iframe class="gist" frameborder="0" srcDoc="<script src=https://gist.github.com/howareyouami/48f1fb61f6e6f6ea2ce4cf0ad9303f20.js></script>"></iframe>

### Reference

- https://github.com/kentcdodds/how-jest-mocking-works
- https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md
