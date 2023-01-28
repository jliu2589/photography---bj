import Layout from "../Components/Layout";
import { api } from "../utils/api";

function admin() {
  const clients = api.form.getform.useQuery();

  let a = clients.data;

  console.log(a);
  return (
    <Layout>
      <div>
        <p>Name: </p>
        <p>Email: </p>
        <p>Phone: </p>
        <p>Message:</p>
      </div>
    </Layout>
  );
}
export default admin;
