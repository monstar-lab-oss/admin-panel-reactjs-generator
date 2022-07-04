"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const path = require("path");
const fs = require("fs/promises");

const prompts = require("./prompts");
const writeFiles = require("./writing");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the riveting ${chalk.yellow(
          "Structure Generator"
        )} generator!`
      )
    );

    this.props = await this.prompt(prompts.intro);
    if (this.props.structure === "features") {
      const answer = await this.prompt(prompts.features);
      this.props.name = answer.name;
    } else {
      var destPath = this.destinationPath();
      prompts.screens[0].choices = await fs.readdir(
        path.join(destPath, `src/features/`)
      );
      const answer = await this.prompt(prompts.screens);
      this.props.parent = answer.parent;
      this.props.screenName = answer.screenName;
    }
  }

  writing() {
    if (this.props.structure === "features") {
      writeFiles.features.call(this);
    } else {
      writeFiles.screens.call(this);
    }
  }

  // Install() {
  //   this.installDependencies();
  // }
};
