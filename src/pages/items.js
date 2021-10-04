import * as React from "react"
import { Link } from "gatsby"
import Hint from "../components/storyGrid"
import tw, { styled } from "twin.macro"

import Layout from "../components/layout"
import Seo from "../components/seo"

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
const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Каталог товарів</h1>
    <Button>
      <Link to="/">На головну </Link>
    </Button>
    <Hint />
  </Layout>
)

export default SecondPage
