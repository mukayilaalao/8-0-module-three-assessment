function Person(props) {
  const { name, age, gender } = props.Person;
  return (
    <div>
      {!props.person ? (
        "NotFound"
      ) : (
        <>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>
            Gender: {gender[0].toUpperCase() + gender.slice(1).toLowerCase()}
          </div>
        </>
      )}
    </div>
  );
}

export default Person;
