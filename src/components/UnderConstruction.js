import React from "react"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
`

const Title = styled.h1`
  margin-bottom: var(--variable-font-margin);
  font-size: var(--variable-font-size);
  line-height: 80%;
  background-image: linear-gradient(to right, #88d3ce 0%, #6e45e2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: variableFont 2.5s infinite;

  span::after {
    content: "\\A";
    white-space: pre;
  }

  @keyframes variableFont {
    from {
      font-weight: 100;
    }
    50% {
      font-weight: 900;
    }
    to {
      font-weight: 100;
    }
  }
`

const Paragraph = styled.p`
  font-weight: 400;
  color: #444;

  @media (max-width: 48rem) {
    span {
      display: none;
    }
  }
`

const Link = styled(Paragraph)`
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }
`

const UnderConstrunction = () => (
  <>
    <Main>
      <Title>
        <span>Under </span>
        construction
      </Title>

      <Paragraph>
        <span>Jesse Vermeulen — </span>
        <Link as="a" href="mailto:hello@jessevermeulen.com">hello@jessevermeulen.com</Link>
      </Paragraph>
    </Main>
  </>
)

export default UnderConstrunction
