import tsj from "ts-json-schema-generator";
import fs from "fs";

const config: tsj.Config = {
  path: "node_modules/@octokit/webhooks-types/schema.d.ts",
  tsconfig: "./tsconfig.json",
  type: "WorkflowRunCompletedEvent",
};

const outputPath = "types/@octokit/webhooks-types";

// make path
fs.mkdirSync(outputPath, {
    recursive: true
});

const schema = tsj.createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);
fs.writeFile(`${outputPath}/workflow-run-completed-event.json`, schemaString, (err) => {
  if (err) throw err;
});
