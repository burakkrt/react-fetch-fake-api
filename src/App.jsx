import {useEffect, useState} from "react";

export default function App() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/teams')
      .then(res => res.json())
      .then(res => setData(res.data))
  }, []);


  return (
    <div>
      <ul className="">
        {data && data.map(data => <li key={data.id}>{data.abbreviation}</li>)}
      </ul>
    </div>
  );
}