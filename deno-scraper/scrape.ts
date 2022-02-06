import { DOMParser, Element } from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'

export interface Post {
  drupalNodeId: number
  path: string
  date: Date
  title: string
  content: string
}


export async function scrape(nodeId: number): Promise<null | Post> {
  const response = await fetch(`https://www.js.geek.nz/node/${nodeId}`)

  if (200 !== response.status) return null

  const html = await response.text()

  const wrapper = new DOMParser()
    .parseFromString(html, 'text/html')!
    .querySelector('#squeeze .left-corner')!

  const title = wrapper.querySelector('h2')
  const date = wrapper.querySelector('.node > .submitted')
  const content = wrapper.querySelector('.node > .content')

  return {
    drupalNodeId: nodeId,
    path: new URL(response.url).pathname,
    date: parseDate(date)!,
    title: title!.innerHTML,
    content: content!.innerHTML,
  }
}

function parseDate(el: Element | null): Date | undefined {
  if (el) {
    const [string] = el.innerText.split('-')
    return new Date(Date.parse(string))
  }
}
