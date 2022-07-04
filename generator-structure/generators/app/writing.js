var path = require("path");
var mkdirp = require("mkdirp");
const { camelCaseConvertor, capitalizeFirstLetter } = require("./string");

module.exports = {
  features: function() {
    var props = this.props;
    var name = props.name;
    const camelCaseName = camelCaseConvertor(name);

    var destPath = this.destinationPath();

    this.fs.copy(
      this.templatePath("src/features/feature/api/feature.api.ts"),
      `src/features/${camelCaseName}/api/${name}.api.ts`
    );
    this.fs.copy(
      this.templatePath("src/features/feature/constants/feature.constants.ts"),
      `src/features/${camelCaseName}/constants/${name}.constants.ts`
    );
    this.fs.copy(
      this.templatePath("src/features/feature/helpers/feature.helpers.ts"),
      `src/features/${camelCaseName}/helpers/${name}.helpers.ts`
    );
    this.fs.copy(
      this.templatePath("src/features/feature/hooks/feature.hooks.ts"),
      `src/features/${camelCaseName}/hooks/${name}.hooks.ts`
    );
    this.fs.copy(
      this.templatePath("src/features/feature/redux/feature.redux.ts"),
      `src/features/${camelCaseName}/redux/${name}.redux.ts`
    );
    this.fs.copy(
      this.templatePath("src/features/feature/routes/feature.routes.ts"),
      `src/features/${camelCaseName}/routes/${name}.routes.ts`
    );
    this.fs.copy(
      this.templatePath("src/features/feature/types/feature.types.ts"),
      `src/features/${camelCaseName}/types/${name}.types.ts`
    );
    this.fs.copy(
      this.templatePath("src/features/feature/feature.ts"),
      `src/features/${camelCaseName}/${name}.ts`
    );

    mkdirp(path.join(destPath, `src/features/${camelCaseName}/screens/`));
  },
  screens: function() {
    var { parent, screenName } = this.props;

    var destPath = this.destinationPath();
    mkdirp(path.join(destPath, `src/features/${parent}/screens/${screenName}`));

    let template = this.fs.read(
      this.templatePath("src/features/feature/screens/feature.tsx"),
      "utf-8"
    );
    template = template.replace(
      new RegExp(/name/gm),
      capitalizeFirstLetter(screenName)
    );

    this.fs.write(
      `src/features/${parent}/screens/${screenName}/${screenName}.tsx`,
      template
    );
    this.fs.copy(
      this.templatePath("src/features/feature/screens/feature.module.scss"),
      `src/features/${parent}/screens/${screenName}/${screenName}.module.scss`
    );
  }
};
