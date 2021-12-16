function Movie(props) {
  const { title, description, release_date } = props.movie;
  return (
    <div>
      {!props.movie ? (
        ""
      ) : (
        <>
          <h3>Title: {title}</h3>
          <div>Release Date: {release_date}</div>
          <div>Description: {description}</div>
        </>
      )}
    </div>
  );
}

export default Movie;
