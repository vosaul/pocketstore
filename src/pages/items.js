import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Section = styled.section`
  max-width: 1300px;
  margin: 50px auto;
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
const Button = styled.button`
  padding: 10px 20px;
  text-align: center;
  background: darkblue;
  color: white;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  height: fit-content;
  border-radius: 8px;
  margin-bottom: 30px;
`
export const query = graphql`
  query PhotosCateQuery {
    allRemoteImages(limit: 36) {
      edges {
        node {
          itemName
          itemPrice
          itemCategoryId
          advItemImages {
            childImageSharp {
              gatsbyImageData(
                formats: WEBP
                webpOptions: { quality: 50 }
                width: 300
              )
            }
          }
        }
      }
    }
  }
`
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
const CategoryPage = ({ data }) => {
  const Items = data.allRemoteImages.edges.map(item => {
    const image = getImage(item.node.advItemImages)
    console.log("IMAGE!!",item.node.advItemImages)
    const itemLink = "it/" + slugify(item.node.itemName)
    return (
      <ItemsCard>
        <GatsbyImage image={image} alt="..." />
        <Header>
          <h4>{item.node.itemName}</h4>
          <p>{item.node.itemPrice} грн.</p>
          <Link to={itemLink} className="buy">
            Детально
          </Link>
        </Header>
      </ItemsCard>
    )
  })

  return (
    <Layout>
      <Seo title="Photos" />
      <Section>
        <SectionHeader>
          <h1
            style={{
              fontFamily: "Caveat, cursive",
              fontSize: "42px",
              fontWeight: "300",
            }}
          >
            Оптимізація віддалених зображень локально
          </h1>
          <Button>
            <Link to="/">На головну </Link>
          </Button>
        </SectionHeader>
        <ItemsGrid>{Items}</ItemsGrid>
      </Section>
    </Layout>
  )
}

export default CategoryPage
