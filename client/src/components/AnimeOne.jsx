import { gql, useQuery } from '@apollo/client';

const GET_ONE = gql`
query Query($title: String!) {
  anime(title: $title) {
    _id
    description
    image
    title
  }
}
`

const AnimeOne = (props) => {
  const { loading, error, data } = useQuery(GET_ONE,
    { variables: { title: props.animeName } }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (

    <div className="searchResultContainer">
      <img src={data.anime.image} alt={data.anime.title} />
      <h1>{data.anime.title}</h1>
      <p>{data.anime.description}</p>
    </div>
  )
};

export default AnimeOne;