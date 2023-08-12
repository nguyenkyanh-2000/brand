import Header from "../components/_organisms/Header";

export const metadata = {
  title: "Products",
  description: "",
};

function ProductLayout({ children }) {
  return (
    <div className="flex flex-col w-screen gap-20 px-16 pt-10 max-sm:px-5">
      <Header />
      {children}
    </div>
  );
}

export default ProductLayout;
