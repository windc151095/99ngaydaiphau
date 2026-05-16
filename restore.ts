import { execSync } from "child_process";
try {
  console.log(execSync("git show HEAD:src/components/WaterFlushStorySection.tsx", { encoding: 'utf-8' }));
} catch (e) {
  console.log("Error:", e.message);
}
