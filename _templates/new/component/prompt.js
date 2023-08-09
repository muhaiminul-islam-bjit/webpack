const changeCase = require('change-case-all');

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt([
        {
          type: 'select',
          name: 'atomic',
          message: 'Select a component type',
          choices: ['atoms', 'molecules', 'organisms', 'templates'],
        },
        {
          type: 'input',
          name: 'component_name',
          message: 'input a component name',
          validate: input => input !== '',
        },
        {
          type: 'confirm',
          name: 'confirm',
          message: 'Generate a component?',
        },
      ])
      .then(async ({ atomic, component_name }) => {
        const lowerName = `${component_name.toLowerCase()}`;
        const pascalName = `${changeCase.pascalCase(component_name)}`;
        const basicClassName = `${atomic.slice(0, 1)}-${component_name}`;
        return { atomic, component_name, lowerName, pascalName, basicClassName };
      });
  },
};