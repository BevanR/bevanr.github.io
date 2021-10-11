import { scrape } from './scrape.ts'
import { createPost } from './hugo.ts'

async function next(nodeId: number) {
  if (nodeId > 999) {
    console.log('Done scraping')
    return
  }

  const result = await scrape(nodeId)
  if (result) {
    console.log(result)
    await createPost(result)
  }

  await next(nodeId + 1)
}

await next(1)
