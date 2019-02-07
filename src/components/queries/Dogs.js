import React from "react"
// import gql from "graphql-tag"
// import { Query } from "react-apollo"

const Dogs = () => (<p>Wow dogs?</p>)

// const GET_DOGS = gql`
//   {
//     dogs {
//       id
//       breed
//     }
//   }
// `

// const Dogs = ({ onDogSelected }) => (
//   <Query query={GET_DOGS}>
//     {({ loading, error, data }) => {
//       if (loading) return "Loading..."
//       if (error) return `Error! ${error.message}`

//       return (
//         <select name="dog" onChange={onDogSelected}>
//           {data.dogs.map(dog => (
//             <option key={dog.id} value={dog.breed}>
//               {dog.breed}
//             </option>
//           ))}
//         </select>
//       )
//     }}
//   </Query>
// )

// const GET_DOG_PHOTO = gql`
//   query Dog($breed: String!) {
//     dog(breed: $breed) {
//       id
//       displayImage
//     }
//   }
// `

// const DogPhoto = ({ breed }) => (
//   <Query query={GET_DOG_PHOTO} variables={{ breed }}>
//     {({ loading, error, data }) => {
//       if (loading) return null
//       if (error) return `Error!: ${error}`

//       return (
//         <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
//       )
//     }}
//   </Query>
// )

// const DogPhoto = ({ breed }) => (
//   <Query
//     query={GET_DOG_PHOTO}
//     variables={{ breed }}
//     skip={!breed}
//     pollInterval={500}
//   >
//     {({ loading, error, data, startPolling, stopPolling }) => {
//       if (loading) return null
//       if (error) return `Error!: ${error}`

//       return (
//         <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
//       )
//     }}
//   </Query>
// )

// export const DogPhoto = ({ breed }) => (
//   <Query query={GET_DOG_PHOTO} variables={{ breed }} skip={!breed}>
//     {({ loading, error, data, refetch }) => {
//       if (loading) return null
//       if (error) return `Error!: ${error}`

//       return (
//         <div>
//           <img
//             src={data.dog.displayImage}
//             style={{ height: 100, width: 100 }}
//           />
//           <button onClick={() => refetch()}>Refetch!</button>
//         </div>
//       )
//     }}
//   </Query>
// )

export default Dogs
