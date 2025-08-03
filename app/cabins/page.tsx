import React from "react";
import Navigation from "../_components/navigation";
import Counter from "../_components/Counter";

interface User {
  id: number;
  name: string;
}
const page: React.FC = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await res.json();
  console.log(data);

  return (
    <div className="p-4 border rounded shadow-md">
      <h1>Cabins page</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </div>
  );
};

export default page;
