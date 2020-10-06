import fs from 'fs'
import { join } from 'path'
import docs from '../docs.json'

const postsDirectory = join(process.cwd(), '_posts')
const DOC_PATH = join(process.cwd(), 'doc.json')
const TTL = 6 * 60 * 60 * 1000

export function getPostSlugs () {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug (slug, fields = []) {
  return docs
}

export async function getAllCategories (fields = []) {
  const categories = {}

  for (const category in docs) {
    categories[category] = docs[category].filter(({ isFPFn }) => !isFPFn).map(d => ({ title: d.title }))
  }

  return categories
}

export async function getDocBySlug(slug) {
  return Object.values(docs).flat().find(({urlId}) => urlId === slug)
}

export async function getSlugs(slug) {
  return Object.values(docs).flat().map(d => d.urlId)
}
