import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')
const DOC_PATH = join(process.cwd(), 'public/doc.json');
const TTL = 6 * 60 * 60 * 1000;

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

const docStat = (async () => {
  try {
    const stats = await fs.statSync(DOC_PATH);
    return stats.mtime;
  } catch (error) {
    return null;
  }
});

const fetchDoc = (async () => {
  const time = await docStat();
  if (new Date().getTime() - new Date(time).getTime() > TTL) {
    const res = await fetch("https://raw.githubusercontent.com/fnsjs/fns.js/master/tmp/docs.json");
    const doc = await res.json();
    fs.writeFileSync(DOC_PATH, JSON.stringify(doc));
    return doc;
  } else {
    const fileContents = fs.readFileSync(DOC_PATH, 'utf8')
    return JSON.parse(fileContents)
  }
});

export function getPostBySlug(slug, fields = []) {
  const fileContents = fs.readFileSync(DOC_PATH, 'utf8')
  const data = JSON.parse(fileContents)


  return data
}

export async function getAllCategories(fields = []) {
  const docs = await fetchDoc();
  const categories = {};

  for (const category in docs) {
    categories[category] = docs[category].map(d => ({title: d.title}))
  }

  return categories
}

export async function getDocBySlug(slug) {
  const docs = await fetchDoc();
  return Object.values(docs).flat().find(({urlId}) => urlId === slug)
}

export async function getSlugs(slug) {
  const docs = await fetchDoc();
  return Object.values(docs).flat().map(d => d.urlId)
}
