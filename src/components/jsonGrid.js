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
const ItemsCard = styled.div`
  ${tw`shadow-inner align-middle relative border h-full grid justify-items-center`}
  grid-tempate-rows: 2fr 1fr;
  position: relative;
  align-items: end;
  padding: 16px 16px 28px;
  p {
    margin-bottom: 8px;
  }
  .descr {
    padding: 20px;
    background: #fff;
    display: none;
    position: fixed;
    top: 100px;
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  &:hover .descr {
    display: block;
  }
  .buy {
    display: block;
    margin: 0 auto;
    width: fit-content;
    padding: 6px 20px;
    text-align: center;
    background: darkblue;
    color: white;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    height: fit-content;
    border-radius: 8px;
    align-self: end;
  }
`
const Header = styled.div`
  display: grid;
  //grid-template-rows: 30px 60px 30px 50px;
  align-content: space-between;
  text-align: center;
  gap: 10px;
  img {
    width: 100%;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    display: block;
    padding: 3px 20px;
    color: #2595df;
    margin-bottom: 10px;
  }
  h4 {
    font-size: 16px;
    font-weight: 400;
    display: block;
    padding: 3px 20px;
    color: #2595df;
    margin-bottom: 10px;
  }
  p {
    color: #666;
    font-size: 22px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`
const Hint = (catId) => {
  const result = useStaticQuery(graphql`
    query MylQuery {
      allHotlineXml(filter: { name: { eq: "items" } }) {
        edges {
          node {
            id
            name
            content
            xmlChildren {
              name
              children {
                name
                content
              }
            }
          }
        }
      }
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

  const Cats = result.allDataJson.edges[0].node.price.categories[0].category.map(
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
  const Items = result.allHotlineXml.edges.map(item => {
    const Itt = item.node.xmlChildren.map(ikt => {
      return (
        <ItemsCard>
          <img src={ikt.children[6].content} alt={ikt.children[3].content} loading="lazy"/>
          <Header>
            <h3>{ikt.children[2].content}</h3>
            <h4>{ikt.children[3].content}</h4>
            <p>{ikt.children[7].content}грн.</p>
            <a className="buy" href={ikt.children[5].content}>
              Купити
            </a>
          </Header>
        </ItemsCard>
      )
    })
    /* console.log(item.node.xmlChildren[0]) */
    return <ItemsGrid>{Itt}</ItemsGrid>
  })

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
      {Items}
    </div>
  )
}
export default Hint
