import { connection } from "next/server";

export async function getDynamicData(id: string) {
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { id, name: `Item ${id}` };
}

export async function getStaticData(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { id, name: `Item ${id}` };
}
