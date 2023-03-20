import { load } from "https://deno.land/std@0.180.0/dotenv/mod.ts";
const config = await load();

function main() {
    console.log(config);
}

main();