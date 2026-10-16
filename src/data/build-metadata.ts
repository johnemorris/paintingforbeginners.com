import { execFileSync } from "node:child_process";
import packageJson from "../../package.json";

const shortShaLength = 8;
const commitPattern = /^[0-9a-f]{7,40}$/i;

function validateCommit(value: string, source: string) {
  const commit = value.trim();
  if (!commitPattern.test(commit)) {
    throw new Error(`Invalid Git commit SHA from ${source}: expected 7–40 hexadecimal characters.`);
  }
  return commit.toLowerCase();
}

function resolveCommit() {
  const pagesCommit = process.env.CF_PAGES_COMMIT_SHA;

  if (process.env.CF_PAGES === "1") {
    if (!pagesCommit) {
      throw new Error("Cloudflare Pages build is missing the required CF_PAGES_COMMIT_SHA value.");
    }
    return validateCommit(pagesCommit, "CF_PAGES_COMMIT_SHA");
  }

  if (pagesCommit) return validateCommit(pagesCommit, "CF_PAGES_COMMIT_SHA");

  try {
    const localCommit = execFileSync("git", ["rev-parse", "HEAD"], {
      cwd: new URL("../..", import.meta.url),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    return validateCommit(localCommit, "local Git HEAD");
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("Invalid Git commit SHA")) throw error;
    throw new Error(
      "Unable to determine the deployed Git commit. Set CF_PAGES_COMMIT_SHA in Cloudflare Pages or build from a Git checkout.",
      { cause: error },
    );
  }
}

if (typeof packageJson.version !== "string" || !packageJson.version.trim()) {
  throw new Error("package.json must contain a non-empty version string.");
}

const commit = resolveCommit();
const shortCommit = commit.slice(0, shortShaLength);

export const buildMetadata = Object.freeze({
  packageVersion: packageJson.version,
  shortCommit,
  displayVersion: `${packageJson.version}.${shortCommit}`,
});
