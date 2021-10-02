import * as React from "react"
import { Link } from "gatsby"
import Hint from "../components/storyGrid"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Рендеринг XML</h1>
    <p>
    <h2>Дані з XML файлу:</h2>
      <Link to="/page-2/">Каталог товарів</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
