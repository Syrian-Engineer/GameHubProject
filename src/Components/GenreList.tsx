import useGeners from "../hooks/useGeners";



const GenreList = () => {
   const {Data} = useGeners()

  return (
    <ul>
        {Data.map((genre) => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList