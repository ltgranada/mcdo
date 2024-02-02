function Foods(props) {
  return (
    <div className="article">
      <div class="centered">{props.Foods.name}</div>
      <img src={props.Foods.photoName} alt={props.Foods.alt} />
      <section className="description">
        <p>{props.Foods.description}</p>
      </section>
    </div>
  );
}

export default Foods;
