"use client";

import { useState } from "react";

interface User {
  id: number;
  name: string;
}

interface CounterProp {
  users: User[];
}

const Counter: React.FC<CounterProp> = ({ users }) => {
  const [count, setCount] = useState(0);
  console.log(users);
  return (
    <div>
      <h1>There are {users.length} users</h1>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
};

export default Counter;
