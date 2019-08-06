# What is Gatsby? 🔥

Gatsby is a "blazing-fast"™ static site generator for React. More about Gatsby [here.](https://www.gatsbyjs.org/docs/)
Under the hood, Gatsby uses GraphQL to expose data to the site, making it super convenient to work with.

You're probably thinking: "oh another GraphQL fanboy", but trust me, give it a try once and you're going to love it. Not to speak about the 100s of plugins Gatsby offers. They literally have a plugin for each problem developers might face. You can see a list of plugins [here.](https://www.gatsbyjs.org/plugins/)

# Gatsby Themes 😎

Okay, so what are Gatsby Themes?

> Gatsby themes allow Gatsby site functionality to be packaged as a standalone product for others (and yourself!) to easily reuse. Using a traditional starter, all of your default configuration lives directly in your site. Using a theme, all of your default configuration lives in an npm package.

Sounds convenient right? Gatsby Themes is a powerful tool, and you can learn more about it [here.](https://www.gatsbyjs.org/docs/themes/)

# Why Gatsby Themes?

With the stable release of Gatsby Themes, Gatsby announced a contest called [Gatsby Theme Jam](https://themejam.gatsbyjs.org/) (that's an awful lot of Gatsby in one sentence..), and since we are using Gatsby to generate static pages at [BrikL](https://brikl.io), we decided that it would be a great time for me to learn make something that we can re-use. (and to win maybe? 🏆)

# About the project

At BrikL we build storefronts for our customers. That's quite a few sites, so the release of Themes gives us the opportunity to reduce time and increase productivity.

The theme we made, is a simple storefront site with a simple setup that uses our GraphQL API to source data from. Our API is quite big, so we decided to expose only a small part of the `schema`

![theme-screenshot](https://i.imgur.com/x9Uq8FR.png "Theme")

To get started with Themes (or any Gatsby site) you normally follow these steps (note: I used `yarn workspaces` because I'm using the theme I create locally and reuse it in my demo site [Learn more](https://yarnpkg.com/lang/en/docs/workspaces/)):

- [x] Init your favourite package manager in the root folder (in this project I used `yarn`), and add a yarn workspaces config
- [x] Create 2 folders, ideally one for `theme` and one called `demo` or `site` but you can name it anything really (yarn workspaces allows us to work on both simultaneously)
- [x] Setup your `gatsby-config.js` and `gatsby-node.js` files
- [x] Start developing your theme

This might seem a lot, but once you understand how this all works together, I hope you'll find it just as useful as I did!

#### Let's get started!

First, we expose 3 core types which are `Products`, `Collections` and `Teamstores`. For example:

```graphql
# schema.gql

type Product {
  id: ID
  title: Text
  description: Text
  accountingId: String
  no: String
  createdAt: Timestamp
  updatedAt: Timestamp
  isCustomProduct: Boolean
  price: Price
  media: [ProductMedia]
  slugs: [SlugLocalised]
  status: ProductStatus
  collections: [ProductCollection]
  inventory: Float
}
```

Next step, we have to set up our `gatsby-config.js` and `gatsby-node.js` files. To connect with our API, we use the `gatsby-source-graphql` plugin and manually define the schema so we only expose the parts we want!

```js
// gatsby-config.js

plugins: [
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "Brikl",
      fieldName: "brikl",
      // Url to query from
      url: "https://api.mybrikl.com/graphql",
      // HTTP headers
      headers: {
        Authorization: userId,
        "x-brikl-shop-id": shopId,
        "x-brikl-client-id": clientId,
      },
      createSchema: async () => {
        const sdl = fs
          .readFileSync(`${__dirname}/brikl-schema.gql`)
          .toString()
        return buildSchema(sdl)
      },
    },
  },
```

Now all we have to do is start generating pages and create components for our theme. Here's an example of how page generation for Products would look like:

```js
// gatsby-node.js

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query {
      brikl {
        shop(id: "${shopId}"){
          id
          products(shopId:"${shopId}"){
            edges {
              node {
                id
                inventory
                no
                media{
                  id
                  image
                }
                price {
                  currency
                  value
                }
                slugs {
                  content
                  langCode
                }
                description {
                  id
                  text {
                    content
                    langCode
                  }
                }
                title {
                  id
                  text {
                    content
                    langCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
}

const products = shop.products.edges

products.forEach(productNode => {
  const product = productNode.node
  if (product.slugs) {
    if (product.slugs && product.slugs.find(e => e.langCode === language)) {
      actions.createPage({
        path: `/${urlPrefix}products/${
          product.slugs.find(e => e.langCode === language).content
        }`,
        component: require.resolve("./src/templates/product.js"),
        context: {
          langCode: language,
          slugs: product.slugs,
          product: product,
          urlPrefix,
          shop,
          productId: product.id,
          languages: language,
        },
      })
    }
  }
})
```

As you can see, we can query all the products from our API, then we generate a page for each product based on the slug that's in our schema. We also have multi language support, so whatever languages we have, gatsby will generate pages for each language. How cool is that?

# But how do you change how components look like?

Glad you asked! Gatsby Themes introduce a concept called **Component Shadowing**. This feature allows users to override a component in order to customize its rendering.
Let's say you want to overwrite the Product card styling in your products page, this is how you'd do it:

First you need to make sure that you set up the file structure correctly in your `demo` folder:

```
demo
└── src
    ├── @brikl
    │   ├── gatsby-theme-brikl-store (your theme name, if namespace then you have to do that first)
    │       ├── components
    │           ├── Product.js
    |
```

As long as the file name you want to overwrite is the same as the one in the theme, you're changes will overwrite the ones in the theme. Here we strip the styling from the Product cards in `Product.js`:

```js
// src/@brikl/gatsby-theme-brikl-store/components/Product.js

import React from "react"
import { getTextFromLanguage } from "@brikl/gatsby-theme-brikl-store/src/utils/utils"
import { Link } from "gatsby"
import { Grid } from "@material-ui/core"

const NewProduct = ({ product, langCode, urlPrefix }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={product.id}>
      <h1>{getTextFromLanguage(product.title.text, langCode)}</h1>
      <h5>{getTextFromLanguage(product.description.text, langCode)}</h5>
      <h3>
        price: ${product.price.value} {product.price.currency}
      </h3>
      <Link
        to={
          `${urlPrefix}/products/` +
          getTextFromLanguage(product.slugs, langCode)
        }
      >
        Details
      </Link>
    </Grid>
  )
}

export default NewProduct
```

This is how our component looks like without shadowing:

![base-design](https://i.imgur.com/qAIo37X.png "base-design")

and after **Component Shadowing**

![stripped-design](https://i.imgur.com/vu8zMN3.png "stripped-design")

# Challenges

I'm fairly new to Gatsby so in order to understand Themes better I had to make myself more familiar with Gatsby first. Things I had to tackle to complete this project:

- I needed to understand how to connect Gatsby to a data source with `gatsby-source-graphql` and how to setup `gatsby-config.js` and `gatsby-node.js`
- I had to understand how page generation works
- I needed to design my Theme in a way that it's easy to reuse and overwrite components

This was a great first step for me to learn Gatsby Themes and Gatsby in general and looking forward to using it more in the future!
