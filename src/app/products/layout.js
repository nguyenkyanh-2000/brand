"use client";

import Header from "../components/_organisms/Header";
import NavMenu from "../components/_organisms/NavMenu";
import { useCycle } from "framer-motion";

function ProductLayout({ children }) {
  const [isMenuOpened, setIsMenuOpened] = useCycle(false, true);
  const [isSearchDialogOpen, setSearchDialogOpen] = useState(false);

  const openSearchDialog = () => {
    setSearchDialogOpen(true);
  };

  const closeSearchDialog = () => {
    setSearchDialogOpen(false);
  };
  return (
    <div className="flex flex-col w-screen  gap-20 px-16 pt-10 max-sm:px-5">
      <NavMenu isMenuOpened={isMenuOpened} toggleNavMenu={setIsMenuOpened} />
      <Header toggleNavMenu={setIsMenuOpened} />
      {children}
    </div>
  );
}

export default ProductLayout;
