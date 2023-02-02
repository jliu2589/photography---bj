import { api } from "../utils/api";

function ClientList() {
  const getClient = api.form.getform.useQuery();
  const clients = getClient.data;

  const handleClick = (name: string) => {
    console.log(`read ${name}`);
  };

  if (!clients) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      {clients.map((client) => (
        <div key={client.id} className="my-2 w-80 border border-black">
          <p>Name: {client.name}</p>
          <p>Email: {client.email}</p>
          <p>Phone: {client.phone}</p>
          <p>Message:{client.message}</p>
          <button onClick={() => handleClick(client.name)}>X</button>
        </div>
      ))}
    </div>
  );
}
export default ClientList;
