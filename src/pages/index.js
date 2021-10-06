import * as React from "react"
import { Link } from "gatsby"
import Cats from "../components/categoryGrid"
import Layout from "../components/layout"
import Seo from "../components/seo"
import tw, { styled } from "twin.macro"

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

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Інтернет-магазин мобільних аксесуарів і техніки PocketStore</h1>
    <p>
      <h2>Дані з XML файлу:</h2>
      {/* <Button>
        <Link to="/items/">Каталог товарів</Link>
      </Button> */}
      <br />
    </p>
    <Cats />
  </Layout>
)

export default IndexPage
