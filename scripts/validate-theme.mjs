// Checks that every theme file is strict JSON and that all colors are valid hex values.
import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const HEX = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const errors = [];

function checkColor(file, key, value) {
  if (typeof value === "string" && !HEX.test(value)) {
    errors.push(`${file}: ${key} has invalid color "${value}"`);
  }
}

for (const { path } of pkg.contributes.themes) {
  let theme;
  try {
    theme = JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    errors.push(`${path}: ${err.message}`);
    continue;
  }

  for (const [key, value] of Object.entries(theme.colors ?? {})) {
    checkColor(path, key, value);
  }
  for (const [i, rule] of (theme.tokenColors ?? []).entries()) {
    const label = rule.name ?? `tokenColors[${i}]`;
    checkColor(path, `${label}.foreground`, rule.settings?.foreground);
    checkColor(path, `${label}.background`, rule.settings?.background);
  }
  for (const [key, value] of Object.entries(theme.semanticTokenColors ?? {})) {
    checkColor(path, key, typeof value === "string" ? value : value.foreground);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Validated ${pkg.contributes.themes.length} theme file(s).`);
