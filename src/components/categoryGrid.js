import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import jsn from "../data/hl"
import tw, { styled } from "twin.macro"

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
            }
          }
        }
      }
    }
  `)
 // console.log("news=====>")

 // console.log(data.allDataJson.edges[0].node.price.categories[0].category)
  const Cats = data.allDataJson.edges[0].node.price.categories[0].category.map(
    (cat, i) => {
      if (cat.parentId === null) {
        return (
          <div key={cat.id[0] + "-" + i}>
            <h4>{cat.name[0]}</h4>
            <p>ID: {cat.id[0]}</p>
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
        {Cats}
      </div>
    </div>
  )
}

export default Cats
