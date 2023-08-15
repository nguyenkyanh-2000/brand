import Breadcrumb from "../_components/atoms/link/Breadcrumb";
import BreadcrumbItem from "../_components/atoms/link/BreadcrumbItem";
import Header from "../_components/organisms/Header";

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
