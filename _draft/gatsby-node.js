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

let iUrls = [
  "https://liljes-tokt.s3-eu-west-1.amazonaws.com/TemplateData/fullscreen.png",
]

sourceNodes = async ({ graphql, reporter, actions, createNodeId, createContentDigest }) => {

 /*  const result = await graphql(`
    {
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
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  } */
gu1 = () => {
  urls.map(url => {
    iUrls.push(url)
  })
 /*  result.data.allHotlineXml.edges.map(item => {
    item.node.xmlChildren.forEach(element => {
      iUrls.push(element.children[6].content)
    })
  }) */
}
/* res.data.allHotlineXml.edges.map(item => {
    item.node.xmlChildren.forEach(element => {
      iUrls.push(element.children[6].content)
    })
  }) */

gu1()
/* 
gu1 = () => {
  urls.map(url => {
    iUrls.push(url)
  })
} */

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
  await Promise.all(promises)
}

module.exports = {
  sourceNodes,
}
