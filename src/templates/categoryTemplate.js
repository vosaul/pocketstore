import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Section = styled.section`
  ${tw`grid justify-items-center auto-rows-auto mx-auto`}
  gap: 30px;
  max-width: 1300px;
`
const SectionHeader = styled.div`
  width: 100%;
  padding: 20px;
  * {
    max-width: 800px;
    margin-bottom: 5px !important;
    line-height: 1.1;
  }
`
const ImgWrapper = styled.div`
  ${tw`bg-gray-50	shadow-lg flex place-content-center	w-full`}
  padding: 20px;
  border: 1px #777 solid;
`
const PaN = styled.div`
  margin: 16px auto;
  display: flex;
  justify-content: center;
  gap: 30px;
  color: blue;
  a {
    padding: 8px 16px;
    background: #eeeeff;
    border-radius: 5px;
  }
`
/* export const query = graphql`
  query ($images: String!) {
    allFile(filter: { relativePath: { regex: $images } }) {
      edges {
        node {
          relativePath
          id
          base
          childImageSharp {
            gatsbyImageData(
              quality: 50
              formats: WEBP
              webpOptions: { quality: 50 }
            )
          }
        }
      }
    }
  }
` */

const CategoryPage = ({ pageContext, data }) => {
  const catItems = pageContext.catList.map(cat => {
    return (
      <div key={cat.id[0]}>
        <h3>{cat.name}</h3>
        <p>Id: {cat.id}</p>
      </div>
    )
  })
  return (
    <Layout>
      <Seo title={pageContext.title} />
      <Section>
        <SectionHeader>
          <h1
            style={{
              fontFamily: "Caveat, cursive",
              fontSize: "42px",
              fontWeight: "300",
            }}
          >
            {pageContext.title}
          </h1>
          {/* <h2>{pageContext.subtitle}</h2> */}
          <div>{catItems}</div>
        </SectionHeader>
      </Section>
    </Layout>
  )
}

export default CategoryPage
