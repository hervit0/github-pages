import React, { Component } from "react"
import gql from "graphql-tag"
import { ApolloConsumer } from "react-apollo"

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`

class DelayedQuery extends Component {
  state = { dog: null }

  onDogFetched = dog => this.setState(() => ({ dog }))

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <div>
            {this.state.dog && <img src={this.state.dog.displayImage} />}
            <button
              onClick={async () => {
                const { data } = await client.query({
                  query: GET_DOG_PHOTO,
                  variables: { breed: "bulldog" }
                })
                this.onDogFetched(data.dog)
              }}
            >
              Click me!
            </button>
          </div>
        )}
      </ApolloConsumer>
    )
  }
}

export default DelayedQuery
