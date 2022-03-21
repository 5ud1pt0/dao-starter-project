import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x84D8e652030107557120A6E2486B702Dd6f7440d",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Sudarshan Chakra",
        description: "This NFT will give you access to GolokDAO!",
        image: readFileSync("scripts/assets/sudarshanchakra.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()