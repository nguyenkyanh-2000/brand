import Footer from "../_components/organisms/Footer";
import Header from "../_components/organisms/Header";
import NavigationLinks from "../_components/molecules/NavigationLinks";
import SearchDialog from "../_components/organisms/SearchDialog";
import NavigationIconsBar from "../_components/molecules/NavigationIconsBar";
import NavMenu from "../_components/molecules/NavMenu";
import { CartIcon } from "../../../public/icons";

const icons = [{ icon: <CartIcon width={24} height={24} />, link: "/cart" }];

const directions = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

function MainLayout({ children }) {
  return (
    <div className="w-screen flex flex-col gap-20">
      <div className="flex flex-col min-h-screen w-screen gap-20 px-16 pt-10 max-sm:px-5">
        <Header>
          <div className="max-xl:hidden">
            <NavigationLinks directions={directions} />
          </div>
          <div className="flex max-xl:hidden gap-8">
            <SearchDialog />
            <NavigationIconsBar icons={icons} />
          </div>
          <div className="hidden max-xl:flex gap-8">
            <SearchDialog />
            <NavMenu>
              <NavigationIconsBar icons={icons} />
            </NavMenu>
          </div>
        </Header>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
