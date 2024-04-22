import { gql, useMutation } from '@apollo/client';

const FAV_ADD = gql`
mutation Mutation($someone: String!, $title: String!) ) {
  favAdd($someone: String!, $title: String!) {
    _id
    email
    favorites
    password
    username
  }
}
`

const AnimeFavAdd = (props) => {
  const [favAdd, { loading, error, data }] = useMutation(FAV_ADD,
    { variables: { username: props.someone, title: props.title } }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  console.log("Add:", username, title, loading, error, data); // DELETE
  return favAdd({ variables: { type: input.value }});
}

export default AnimeFavAdd;

