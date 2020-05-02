import React from "react"
import { StaticQuery, graphql } from "gatsby"

import * as S from "./style"

const UnderConstruction = ({ data }) => (
  <S.Main>
    <S.Title>
      {data.contentYaml.title}
    </S.Title>
    
    <S.Paragraph>
      <span>{data.contentYaml.name} — </span>
      <S.Link as="a" href={"mailto:" + data.contentYaml.contact}>
        {data.contentYaml.contact}
      </S.Link>
    </S.Paragraph>
  </S.Main>
)

export default () => (
  <StaticQuery
    query={graphql`
      query UnderConstructionQuery {
        contentYaml {
          title
          name
          contact
        }
      }
    `}
    render={data => <UnderConstruction data={data} />} 
  />
)
