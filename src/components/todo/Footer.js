import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

import TodoLink from "./TodoLink"

const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`

const FilterTodoLink = ({ filter, children }) => (
  <Query query={GET_VISIBILITY_FILTER}>
    {({ data, client }) => (
      <TodoLink
        onClick={() => client.writeData({ data: { visibilityFilter: filter } })}
        active={data.visibilityFilter === filter}
      >
        {children}
      </TodoLink>
    )}
  </Query>
)

const Footer = () => (
  <p>
    Show: <FilterTodoLink filter="SHOW_ALL">All</FilterTodoLink>
    {", "}
    <FilterTodoLink filter="SHOW_ACTIVE">Active</FilterTodoLink>
    {", "}
    <FilterTodoLink filter="SHOW_COMPLETED">Completed</FilterTodoLink>
  </p>
)

export default Footer
