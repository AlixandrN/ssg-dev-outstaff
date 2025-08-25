interface IUser {
  id: string;
  name: string;
  email: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users: IUser[] = await res.json();

  return (
    <div>
      <h1>USERS LIST:</h1>
      <p> {new Date().toLocaleTimeString()} </p>

      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserPage;

// const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//   cache: "no-store",
// });
