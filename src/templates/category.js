import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import {Link} from "gatsby"
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
export const query = graphql`
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
`

const PortfolioPage = ({ pageContext, data }) => {
  const PrevNext = () => {
  var next = pageContext.next
    ? "/portfolio/" + pageContext.next
    : pageContext.next
  var prev = pageContext.prev
    ? "/portfolio/" + pageContext.prev
    : pageContext.prev
  
      return (
        <PaN>
          {next ? <Link to={next}>⬅️ Наступне </Link> : ""}
          {prev ? <Link to={prev}>Попереднє ➡️</Link> : ""}
        </PaN>
      )
    }
  return (
    <Layout>
      <Seo title={pageContext.title} />
      <Section>
        <SectionHeader>
          <h2
            style={{
              fontFamily: "Caveat, cursive",
              fontSize: "42px",
              fontWeight: "300",
            }}
          >
            {pageContext.title}
          </h2>
          <p>
            <i>{pageContext.content}</i>
          </p>
          <b>індекс: {pageContext.rel}</b>
          <p>{pageContext.available}</p>
          <PrevNext />
        </SectionHeader>
        {data.allFile.edges.map(item => (
          <ImgWrapper key={item.node.id}>
            <GatsbyImage image={getImage(item.node)} alt={pageContext.title} />
          </ImgWrapper>
        ))}
        <PrevNext />
      </Section>
    </Layout>
  )
}

export default PortfolioPage
