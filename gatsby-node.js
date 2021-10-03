/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const urls = [
  "https://liljes-tokt.s3-eu-west-1.amazonaws.com/TemplateData/fullscreen.png",
  "https://liljes-tokt.s3-eu-west-1.amazonaws.com/TemplateData/webgl-logo.png",
  "https://liljes-tokt.s3-eu-west-1.amazonaws.com/TemplateData/progressLogo.Dark.png",
  "https://liljes-tokt.s3-eu-west-1.amazonaws.com/TemplateData/progressEmpty.Dark.png",
  "https://liljes-tokt.s3-eu-west-1.amazonaws.com/TemplateData/progressFull.Dark.png",
  "https://oep2stt.s3-eu-west-1.amazonaws.com/sample-listening-multiple-choice-one-answer/images/banner/IELTSlogo.png",
  "https://oep2stt.s3-eu-west-1.amazonaws.com/sample-listening-multiple-choice-one-answer/images/banner/IELTSpartners.jpg",
  "https://oep2stt.s3-eu-west-1.amazonaws.com/sample-listening-multiple-choice-one-answer/images/main/userCheck.png",
]

let iUrls = ["https://liljes-tokt.s3-eu-west-1.amazonaws.com/TemplateData/fullscreen.png"]
const getUrls = ({ actions: { createPage }, graphql }) => {
  const data = graphql(`
    {
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
  const gu = data.allHotlineXml.edges.map(item => {
    const Itt = item.node.xmlChildren.map(ikt => {
      iUrls.push(ikt.children[6].content)
    })
  })
}

const sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
 

  const { createNode } = actions

  const promises = iUrls.map(imageUrl =>
    createNode({
      id: createNodeId(`customNode-${imageUrl}`),
      imageUrl,
      internal: {
        type: "CustomNode",
        contentDigest: createContentDigest(imageUrl),
      },
    })
  )
  Promise.all(promises)
}

module.exports = {
  sourceNodes,
}
