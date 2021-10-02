import * as React from "react"
import { Link } from "gatsby"
import Hint from "../components/storyGrid"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Каталог товарів з hotline.xml</h1>
    <Link to="/">Go back to the homepage</Link>
    <Hint />
  </Layout>
)

export default SecondPage
