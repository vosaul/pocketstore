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
    grid-template-columns: 1fr 1fr 1fr;
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
  console.log("news=====>")
  /*  console.log(jsn.price.items.item[0].description)
  console.log(
    data.allHotlineXml.edges[0].node.xmlChildren[0].children[4].content
  ) */

  /*  const vendor =
    data.allHotlineXml.edges[0].node.xmlChildren[0].children[2].content
  const title =
    data.allHotlineXml.edges[0].node.xmlChildren[0].children[3].content
  const text =
    data.allHotlineXml.edges[0].node.xmlChildren[0].children[4].content
  const image =
    data.allHotlineXml.edges[0].node.xmlChildren[0].children[6].content
  const iUrls = []
  const gu = data.allHotlineXml.edges.map(item => {
    const Itt = item.node.xmlChildren.map(ikt => {
      iUrls.push(ikt.children[6].content)
    })
  }) */

  console.log("WTF")
  console.log(data.allDataJson.edges[0].node.price.categories[0].category)
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
