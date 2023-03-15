export default function Home({ users }) {
    return (
        <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await response.json();
   // console.log(data);
  
    return {
      props: {
        users: data,
      },
    };
  };