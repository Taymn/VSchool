import Pet from "./Pet";

function Friend(props) {
    const { name, age, pets } = props
    const petsList = pets.map((item) => <Pet name={item.name} breed={item.breed} />)
    return (
        <section className="Friend-card">

            <div>
                <h1>Friend: {name}</h1>
                <h3>Age: {age}</h3>
              <h3>Pet(s){petsList}</h3> 
            </div>
           
            <hr/>
        </section>);
}

export default Friend;