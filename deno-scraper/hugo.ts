import type { Post } from './scrape.ts'
import { ensureFile } from 'https://deno.land/std/fs/mod.ts'

export async function createPost({ drupalNodeId, path, date, title, content }: Post) {
  const body = `---
title: "${title.replaceAll('"', '\\"')}"
date: ${date}
drupalNodeId: ${drupalNodeId}
---
${content}
`

  const filePath = `../content/${path}.html`
  await ensureFile(filePath)
  return await Deno.writeFile(filePath, new TextEncoder().encode(body))
}
