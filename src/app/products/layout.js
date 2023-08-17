import Footer from "../_components/organisms/Footer";
import Header from "../_components/organisms/Header";

export const metadata = {
  title: "Products",
  description: "",
};

function ProductLayout({ children }) {
  return (
    <div className="w-screen flex flex-col gap-20">
      <div className="flex flex-col w-screen gap-20 px-16 pt-10 max-sm:px-5">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default ProductLayout;
