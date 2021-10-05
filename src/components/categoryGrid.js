import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import jsn from "../data/hl"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const ItemsGrid = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 920px) {
    grid-template-columns: 1fr 1fr 1fr;node.frontmatter.slug
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const Cats = () => {
  const data = useStaticQuery(graphql`
    query CatQuery {
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
              items {
                item {
                  categoryId
                  description
                  image
                  name
                  priceRUAH
                  url
                }
              }
            }
          }
        }
      }
    }
  `)
 
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


  // console.log(data.allDataJson.edges[0].node.price.categories[0].category)
  const Cates = data.allDataJson.edges[0].node.price.categories[0].category.map(
    cat => {
      const Children = 
      data.allDataJson.edges[0].node.price.categories[0].category.map(chld => {
         if (chld.parentId && chld.parentId[0] === cat.id[0]) {
           let url = slugify(cat.name[0]) + "/" + slugify(chld.name[0])
           return (
               <Link to={url} key={chld.id[0]} 
               style={{
                 display: "block",
               textAlign: "left",
               margin: "5px",
               padding: "0",
               }}>
                 {chld.name[0]} 
               </Link>
             )
         } 
        }
      )
      if ( cat.parentId === null ) {
        return (
          <div key={cat.id[0]}>
            <h4>{cat.name[0]}</h4>
            <p>ID: {cat.id[0]}</p>
            <hr/>
            {Children} 
          </div>
        )
      }
    }
  )

  /* console.log(item.node.xmlChildren[0]) */

  return (
    <div
      style={{
        background: `rebec.capurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <h2>Категорії товару</h2>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr 1fr 1fr`,
        }}
      >
        {Cates}
      </div>
    </div>
  )
}

export default Cats
