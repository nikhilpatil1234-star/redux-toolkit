import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counter-slice";
import "./App.css";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-calls";
import { useState } from "react";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const [numDogs, setNumDogs] = useState(10);
  const dispatch = useAppDispatch();
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);
  console.log(data);
  const handleIncreament = () => {
    dispatch(incremented());
    // dispatch(amountAdded(3))
  };
  const handleAmountAdded = () => {
    dispatch(amountAdded(3));
  };
  return (
    <div className="App">
      <button onClick={handleIncreament}> count is: {count}</button>
      <button onClick={handleAmountAdded}>count increase by 3:{count}</button>
      <>
        <h1> dog to fetch</h1>
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="100">100</option>
        </select>
        <p> No of dogs:{data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dog) => {
              return (
                <tr key={dog.id}>
                  <td>{dog.name}</td>
                  <td>
                    <img src={dog.image.url} alt="pic" height={"200px"} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default App;
