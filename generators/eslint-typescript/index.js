const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommandSync("npm", [
      "install",
      "-D",
      "prettier",
      "eslint",
      "eslint-config-prettier",
      "eslint-config-standard",
      "eslint-plugin-import",
      "eslint-plugin-node",
      "eslint-plugin-n",
      "eslint-plugin-prettier",
      "eslint-plugin-promise",
      "eslint-plugin-react",
      "eslint-plugin-react-hooks",
      "eslint-plugin-tailwindcss",
      "@typescript-eslint/parser",
      "@typescript-eslint/eslint-plugin",
    ]);
  }

  eslint() {
    this.fs.copy(this.templatePath(".eslintrc"), this.destinationPath(".eslintrc"));
  }

  vscode() {
    this.fs.copy(this.templatePath(".vscode"), this.destinationPath(".vscode"));
  }

  eslintIgnore() {
    this.fs.copy(this.templatePath(".eslintignore"), this.destinationPath(".eslintignore"));
  }

  editorconfig() {
    this.fs.copy(this.templatePath(".editorconfig"), this.destinationPath(".editorconfig"));
  }
};
