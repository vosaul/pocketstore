import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import jsn from "../data/hl"
import tw, { styled } from "twin.macro"

const ItemsGrid = styled.div`
  display: grid;
  gap: 10px 20px;
  grid-template-columns: 1fr 1fr 1fr;
`
const ItemsCard = styled.div`
  display: grid;
  align-content: space-between;
  position: relative;
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
    padding: 10px 20px;
    text-align: center;
    background: darkblue;
    color: white;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    height: fit-content;
    border-radius: 8px;
  }
`
const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`
const Hint = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allHotlineXml(filter: { name: { eq: "items" } }, limit: 12) {
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
    }
  `)
  console.log("news=====>")
  /*  console.log(jsn.price.items.item[0].description)
  console.log(
    data.allHotlineXml.edges[0].node.xmlChildren[0].children[4].content
  ) */

  const vendor =
    data.allHotlineXml.edges[0].node.xmlChildren[0].children[2].content
  const title =
    data.allHotlineXml.edges[0].node.xmlChildren[0].children[3].content
  const text =
    data.allHotlineXml.edges[0].node.xmlChildren[0].children[4].content
  const image =
    data.allHotlineXml.edges[0].node.xmlChildren[0].children[6].content

  const Items = data.allHotlineXml.edges.map(item => {
    const Itt = item.node.xmlChildren.map(ikt => {

      let descr = ikt.children[4].content[0] == `"` ? ikt.children[4].content.slice(1) : ikt.children[4].content
      return (
        <ItemsCard>
          <Header>
            <div>
              <h3>{ikt.children[2].content}</h3>
              <h4>{ikt.children[3].content}</h4>
              <p>Ціна: {ikt.children[7].content}грн.</p>
            </div>
            <img src={ikt.children[6].content} alt={ikt.children[3].content} />
          </Header>
          <a className="buy" href={ikt.children[5].content}>Купити</a>
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
      {Items}
    </div>
  )
}

export default Hint
