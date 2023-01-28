import Navbar from "./Navbar";

interface Props {
  children: JSX.Element;
}

function Layout<Props>({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
export default Layout;
