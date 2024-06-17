import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { create, defaultConfig } from 'fumadocs-contentlayer/configuration'
import GithubSlugger from 'github-slugger'

const { Docs, Meta, contentDirPath, mdx } = create(defaultConfig)

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
  headings: {
    type: 'json',
    resolve: async (doc) => {
      const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g
      const slugger = new GithubSlugger()
      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
        ({ groups }) => {
          const flag = groups?.flag
          const content = groups?.content
          return {
            level:
              flag?.length == 1 ? 'one' : flag?.length == 2 ? 'two' : 'three',
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          }
        }
      )
      return headings
    },
  },
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    image: {
      type: 'string',
      required: true,
    },
    authors: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Author,
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
    category: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
    toc: {
      type: 'boolean',
      required: false,
      default: false,
    },
  },
  computedFields,
}))

export const Author = defineDocumentType(() => ({
  name: 'Author',
  filePathPattern: `authors/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    avatar: {
      type: 'string',
      required: true,
    },
    twitter: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}))

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath,
  mdx,
  documentTypes: [Post, Docs, Meta, Author, Page],
})
