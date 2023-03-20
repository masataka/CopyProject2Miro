import { load } from "https://deno.land/std@0.180.0/dotenv/mod.ts";
const config = await load();

async function main() {
  const token = config.MIRO_TOKEN || "";
  if (!token) {
    throw new Error("Miro OAuth token not found.");
  }
  const response = await fetch("https://api.miro.com/v2/boards", {
    method: "POST",
    body: JSON.stringify({
      name: "Hello World",
      policy: {
        permissionsPolicy: {
          collaborationToolsStartAccess: "all_editors",
          copyAccess: "team_editors",
          sharingAccess: "owner_and_coowners",
        },
        sharingPolicy: {
          access: "private",
          inviteToAccountAndBoardLinkAccess: "no_access",
          organizationAccess: "private",
          teamAccess: "private",
        },
      },
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
      "content-type": "application/json",
    },
  });
  return response;
}

console.log(await main());
