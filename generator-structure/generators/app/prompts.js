module.exports = {
  intro: [
    {
      type: "list",
      name: "structure",
      message: "Select your structure?",
      default: "screens",
      choices: ["features", "screens"]
    }
  ],
  features: [
    {
      type: "input",
      name: "name",
      message: "Enter your structure name (use kebab case like: job-post):"
    }
  ],
  screens: [
    {
      type: "list",
      name: "parent",
      message: "Choose the parent directory"
    },
    {
      type: "input",
      name: "screenName",
      message: "Enter your screen name "
    }
  ]
};
