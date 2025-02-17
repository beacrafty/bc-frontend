import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { t } from "i18next";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { RiHeartLine, RiHome2Line, RiSearch2Line, RiShoppingBagLine, RiUserLine } from "react-icons/ri";

const MobileMenu = () => {
  const { setOpenAuthModal, setCartCanvas } = useContext(ThemeOptionContext);
  const isAuthenticated = Cookies.get("uat");
  const router = useRouter();
  const [active, setActive] = useState(1);

  const handleProfileClick = (e) => {
    e.preventDefault();
    isAuthenticated ? router.push("/account/dashboard") : setOpenAuthModal(true);
    handleActive(5);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    isAuthenticated ? router.push("/wishlist") : setOpenAuthModal(true);
    handleActive(4);
  };

  const handleActive = (num) => {
    setActive(num);
  };

  const handleCart = (e) => {
    e.preventDefault();
    setCartCanvas(true);
    handleActive(3);
  };

  return (
    <div className="mobile-menu d-md-none d-block mobile-cart">
      <ul>
        <li className={active === 1 ? "active" : ""} onClick={() => handleActive(1)}>
          <Link href="/">
            <RiHome2Line />
            <span>{t("Home")}</span>
          </Link>
        </li>
        <li className={active === 2 ? "active" : ""}>
          <Link href="/search" onClick={() => handleActive(2)}>
            <RiSearch2Line />
            <span>{t("Search")}</span>
          </Link>
        </li>
        <li className={active === 3 ? "active" : ""}>
          <button onClick={handleCart} className="nav-link">
            <RiShoppingBagLine />
            <span>{t("Cart")}</span>
          </button>
        </li>
        <li className={active === 4 ? "active" : ""}>
          <button onClick={handleWishlist} className="nav-link">
            <RiHeartLine />
            <span>{t("Wishlist")}</span>
          </button>
        </li>
        <li className={active === 5 ? "active" : ""}>
          <button onClick={handleProfileClick} className="nav-link">
            <RiUserLine />
            <span>{t("User")}</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
