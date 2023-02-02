import './App.css';

function App() {
  let People = [
    {
      name: "Ali",
      age: "18",
      gender: "Male",
      city: "Karachi",
      job: "Software Engineer",
      salary: 80000,
    },
    {
      name: "Ahmed",
      age: "19",
      gender: "Male",
      city: "Multan",
      job: " Video Game Designer",
      salary: 90000,
    },
    {
      name: "Rahim",
      age: "20",
      gender: "Male",
      city: "Karachi",
      job: "Software Engineer",
      salary: 99000,
    },
    {
      name: "Zain",
      age: "22",
      gender: "Male",
      city: "Lahore",
      job: "Software Integration Engineer",
      salary: 70000,
    },
    {
      name: "Ayesha",
      age: "21",
      gender: "Female",
      city: "Islamabad",
      job: "Front-end Engineer",
      salary: 90000,
    },
    {
      name: "Fatima",
      age: "23",
      gender: "Female",
      city: "Faisalabad",
      job: "Full-stack Engineer",
      salary: 100000,
    },
    ];
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="People">Hello React People</h1>
        {People.map((x, i) => {
          return (
            <div key={i} className="card">
              <h3>{x.name}</h3>
              <p>{x.age}</p>
              <p>{x.gender}</p>
              <p>{x.city}</p>
              <p>{x.job}</p>
              <p>Rs {x.salary} /-</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
