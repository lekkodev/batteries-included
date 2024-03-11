const {RuleTester} = require("@typescript-eslint/rule-tester");
const lekkoLimitations = require("./lekko-limitations");

const ruleTester = new RuleTester({
  parserOptions: { sourceType: "module" }
});

ruleTester.run(
  "lekko-limitations", 
  lekkoLimitations,
  { 
    valid: [{
      code: "export async function getFlag({ env }: { env: string }): Promise<bool> { return false; }",
    }],
    invalid: [
      {
        code: "async function getFlag({ env }: { env: string }): Promise<bool> { return false; }",
        errors: 2,
      },
      {
        code: "export function getFlag({ env }: { env: string }): bool { return false; }",
        errors: 1,
      },
      {
        code: "export async function getFlag({ env }: { env: string }): bool { const x = 0; return false; }",
        errors: 1,
      },
      {
        code: "export async function get_flag({ env }: { env: string }): bool { return false; }",
        errors: 1,
      },
    ],
  }
);

console.log("All tests passed!");
