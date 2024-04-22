import { gql, useMutation } from '@apollo/client';

const FAV_REMOVE = gql`
mutation Mutation($someone: String!, $title: String!) {
    favRemove(someone: $someone, title: $title)  {
      _id
      email
      favorites
      password
      username
    }
  }
`

const AnimeFavRemove = (props) => {
  const [favRemove, { loading, error, data }] = useMutation(FAV_REMOVE,
    { variables: { username: props.someone, title: props.title } }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  console.log("Add:", username, title, loading, error, data); // DELETE
  return favRemove({ variables: { type: input.value }});
}

export default AnimeFavRemove;