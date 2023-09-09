import Header from "../_components/organisms/Header";
import NavigationLinks from "../_components/molecules/NavigationLinks";
import NavMenu from "../_components/molecules/NavMenu";
import { HomeIcon } from "../../../public/icons";

const directions = [
  { name: "Home", to: "/" },
  { name: "Dashboard", to: "/admin" },
  { name: "Customers", to: "/admin/customers" },
  { name: "Products", to: "/admin/products" },
];

const icons = [{ icon: <HomeIcon width={24} height={24} />, link: "/" }];

export const metadata = {
  title: "Admin Dashboard",
  description: "",
};

function AdminLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-screen gap-20 px-16 pt-10 max-sm:px-5">
      <Header>
        <div className="max-xl:hidden">
          <NavigationLinks directions={directions} />
        </div>
        <div className="hidden max-xl:flex gap-8">
          <NavMenu></NavMenu>
        </div>
      </Header>
      {children}
    </div>
  );
}

export default AdminLayout;
