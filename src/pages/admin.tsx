import Layout from "../Components/Layout";
import { api } from "../utils/api";
import ClientList from "../Components/ClientList";

function admin() {
  return (
    <Layout>
      <h1 className="mx-auto text-center text-2xl">Messages: </h1>
      <div className="max-w2xl mx-auto flex justify-center">
        <ClientList />
      </div>
    </Layout>
  );
}

export default admin;
