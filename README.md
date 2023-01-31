# QloApps Development Documentation

The online version of this documentation is hosted at [https://devdocs.qloapps.com](https://devdocs.qloapps.com/).

## Contribution guide

Contributions are more than welcome! To start contributing to this documentation, you need to deploy it locally and make the required changes. Here is how to deploy:

- Fork this repository.

- Clone your fork.

- Follow the [Install dependencies](#Install-dependencies) section.

Before making a contribution using a pull request make sure:

- If adding a new page, its topic has not been covered already.

- To use proper terminology as used in this documentation when referring to parts of QloApps.

- To use `kebab-case` when adding a new file. For example, `new-file-one.md`, `new-file-two.md` etc.

Follow VuePress official guide at [https://vuepress.vuejs.org/guide](https://vuepress.vuejs.org/guide/) for further help.

## Install dependencies

- Clone the repository somewhere on your system:
  ```
  git clone https://github.com/Qloapps/qloapps-docs.git
  ```

- Switch to the `qloapps-docs` directory:
  ```
  cd qloapps-docs
  ```

- Install all dependencies:
  ```
  npm install
  ```

- Build and deploy your repository:
  ```
  npm run docs:dev
  ```

- Open your browser and go to [http://localhost:8080](http://localhost:8080).
