const Items = require("./src/data/hl.json")
const remItems = Items.price.items[0].item.map(item => {
  return {
    id: item.id[0],
    categoryId: item.categoryId[0],
    vendor: item.vendor[0],
    image: item.image[0],
    name: item.name[0],
    priceRUAH: item.priceRUAH[0],
    description: item.description[0],
    url: item.url[0],
    stock: item.stock[0],
  }
})

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {

  /* const remoteItems = Items.price.items[0].item */
/*   {
    console.log("REMOTE ITEMS =====>", remItems)
  } */
  const { createNode } = actions
  const promises = remItems.map(Item =>
    createNode({
      id: createNodeId(`remoteImages-${Item.image}`),
      itemCategoryId: Item.categoryId,
      itemImage: Item.image,
      itemVendor: Item.vendor,
      itemName: Item.name,
      itemId: Item.id,
      itemPrice: Item.priceRUAH,
      itemDescription: Item.description,
      itemUrl: Item.url,
      internal: {
        type: "remoteImages",
        contentDigest: createContentDigest(Item),
      },
    })
  )
  await Promise.all(promises)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const categoryTemplate = require.resolve(
    `./src/templates/categoryTemplate.js`
  )
  const itemPage = require.resolve(
    `./src/templates/itemPage.js`
  )
  const result = await graphql(`
    {
      allDataJson {
        edges {
          node {
            id
            price {
              categories {
                category {
                  name
                  id
                  parentId
                }
              }
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, "") // trim
    str = str.toLowerCase()
  
    let from = [
      "а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ь", "ю", "я",   ]
    let to = [
      "a", "b", "v", "g", "d", "e", "zh", "z", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "h", "c", "ch", "sh", "sht", "y", "", "iu", "ia",   ]
    for (let key in from) {
      str = str.replace(new RegExp(from[key], "g"), to[key])
    }
 
    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-") // collapse dashes

    return str
  }
  // top level categories
  function topLevel(item) {
    let list = []
    for (let index = 0; index < item.length; index++) {
      const el = item[index]
      if (el.parentId === null) {
        list.push(el)
      }
    }
    return list
  }
  let catList = topLevel(
    result.data.allDataJson.edges[0].node.price.categories[0].category
  )

 /*  catList.forEach(parent => {
    let arr = result.data.allDataJson.edges[0].node.price.categories[0].category
    for (let index = 0; index < arr.length; index++) {
      let el = arr[index]
      if (el.parentId && el.parentId[0] === parent.id[0]) {
        let pagePath = slugify(parent.name[0]) + "/" + slugify(el.name[0])
        createPage({
          path: pagePath,
          component: categoryTemplate,
          context: {
            // aitemitional data can be passed via context
            title: el.name[0],
            id: el.id[0],
          },
        })
      }
    }
  }) */

  remItems.forEach(el => {
    let pagePath = "items/it/" + slugify(el.name)
        createPage({
          path: pagePath,
          component: itemPage,
          context: {
            // aitemitional data can be passed via context
            title: el.name,
            id: el.id,
            description: el.description,
          },
        })
      })
}
