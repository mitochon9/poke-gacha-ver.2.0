module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "projectName",
        message:
          "What is the project name? => src/component/{projectName}/{dirname}/{name}  ※ atom・molecule・page を作る場合は入力不要です。Enter で進んでください。",
      },
      {
        type: "list",
        name: "atomic",
        message: "Choose atomic?",
        choices: [
          { name: "atom", value: "atom" },
          { name: "molecule", value: "molecule" },
          { name: "project", value: "project" },
          { name: "page", value: "page" },
        ],
      },
      {
        type: "input",
        name: "name",
        message:
          "What is the component {name}? => src/component/{atomic}/{dirname}/{name}",
      },
    ],
    actions: (data) => {
      const path = `../src/component/${data.atomic}/`;
      let projectName = data.projectName.toLowerCase();
      if (!data.projectName) {
        projectName = "project";
      }
      const projectPath = `../src/component/${projectName}/`;

      switch (data.atomic) {
        case "atom":
          return [
            {
              type: "add",
              path: path + "{{pascalCase name}}/index.ts",
              templateFile: "template/atom.index.ts.hbs",
            },
            {
              type: "add",
              path: path + "{{pascalCase name}}/{{pascalCase name}}.tsx",
              templateFile: "template/atom.component.tsx.hbs",
            },
            {
              type: "add",
              path: path + "{{pascalCase name}}/{{pascalCase name}}.type.ts",
              templateFile: "template/atom.type.ts.hbs",
            },
            {
              type: "add",
              path:
                path + "{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
              templateFile: "template/atom.stories.tsx.hbs",
            },
          ];
        case "molecule":
          return [
            {
              type: "add",
              path: path + "{{pascalCase name}}/index.ts",
              templateFile: "template/molecule.index.ts.hbs",
            },
            {
              type: "add",
              path: path + "{{pascalCase name}}/{{pascalCase name}}.tsx",
              templateFile: "template/molecule.component.tsx.hbs",
            },
            {
              type: "add",
              path: path + "{{pascalCase name}}/{{pascalCase name}}.type.ts",
              templateFile: "template/molecule.type.ts.hbs",
            },
            {
              type: "add",
              path: path + "{{pascalCase name}}/{{pascalCase name}}.props.ts",
              templateFile: "template/molecule.props.ts.hbs",
            },
            {
              type: "add",
              path: path + "{{pascalCase name}}/{{pascalCase name}}.test.tsx",
              templateFile: "template/molecule.test.tsx.hbs",
            },
            {
              type: "add",
              path:
                path + "{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
              templateFile: "template/molecule.stories.tsx.hbs",
            },
          ];
        case "project":
          return [
            {
              type: "add",
              path: projectPath + "{{pascalCase name}}/index.tsx",
              templateFile: "template/project.index.tsx.hbs",
            },
            {
              type: "add",
              path: projectPath + "{{pascalCase name}}/{{pascalCase name}}.tsx",
              templateFile: "template/project.component.tsx.hbs",
            },
            {
              type: "add",
              path:
                projectPath + "{{pascalCase name}}/{{pascalCase name}}.type.ts",
              templateFile: "template/project.type.ts.hbs",
            },
            {
              type: "add",
              path:
                projectPath +
                "{{pascalCase name}}/{{pascalCase name}}.props.ts",
              templateFile: "template/project.props.ts.hbs",
            },
            {
              type: "add",
              path:
                projectPath +
                "{{pascalCase name}}/{{pascalCase name}}.test.tsx",
              templateFile: "template/project.test.tsx.hbs",
            },
            {
              type: "add",
              path:
                projectPath +
                "{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
              templateFile: "template/project.stories.tsx.hbs",
            },
          ];
        case "page":
          return [
            {
              type: "add",
              path: "../src/pages/{{kebabCase name}}.tsx",
              templateFile: "template/page.tsx.hbs",
            },
            {
              type: "add",
              path: "../src/__test__/unit/page/{{pascalCase name}}.test.tsx",
              templateFile: "template/page.test.tsx.hbs",
            },
          ];
        default:
          return [];
      }
    },
  });
};
