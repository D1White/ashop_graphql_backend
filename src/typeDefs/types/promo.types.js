import { gql } from 'apollo-server-express'

export const promoTypes = gql`
  type Promo {
    novetly: [Product!]!
    top_sales: [Product!]!
  }
`
