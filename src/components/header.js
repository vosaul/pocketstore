import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

const HeaderBox = styled.header`
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
`
const TopHeader = styled.div`
  position: relative;
  padding-top: 15px;
  padding-bottom: 30px;
  background: #fff;
  color: #666666;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`
const Logo = styled.div`
  width: 160px;
`
const Nav = styled.nav`
  display: flex;
  gap: 30px;
  align-items:center;
  * {
    color: #666666;
    font-size: 20px;
    font-family: sans-serif;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderBox
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <TopHeader>
      <Container>
        <Logo>
          <Link to="/" title="Інтернет-магазин pocketstore.ua">
            <img src="../images/logo.svg" alt="logo" />
          </Link>
        </Logo>
        <Nav>
          <Link to="/categories" title="Категорії">
            Категорії
          </Link>
          <Link to="/items" title="Товар">
            Товар
          </Link>
        </Nav>
      </Container>
    </TopHeader>
  </HeaderBox>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
