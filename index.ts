// Taken/inspired by @lekoarts gatsby-minimal-blog-core and its dependencies

/**
 * e: in the gatsby-minimal-blog-core implementation is the 'source' passed in during a field-extension process.. so this is likely the entire set of fields per source node. a: is the string-interpolated combination of basePath and postsPath: `${basePath}/${postsPrefix}`. The function in action in the gatsby-node node-sourcing/creation process looks like this: 
 * createFieldExtension({
    name: `slugify`,
    extend() {
      return {
        resolve(source) {
          return slugify(source, `${basePath}/${postsPrefix}`)
        },
      }
    },
  })
  (actual code minified below)
 L = (e, a) => { let s = e.slug ? e.slug : i(e.title); return `/${a}/${s}`.replace(/\/\/+/g, "/") };
 */

function slugify(sourceNode: string, postsPath: string): string {
  return '';
}
