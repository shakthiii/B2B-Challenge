import React from "react";
import { BsArrowLeftShort, BsChevronDown, BsLink45Deg } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { TbMessages } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { AiOutlineStar, AiOutlineUser, AiOutlineTeam } from "react-icons/ai";
import { useState } from "react";
import Logo from "../assests/Logo.svg";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import SearchBar from "../components/SearchBar";
import Hero1 from "../assests/images/hero-image.png";
import Hero2 from "../assests/images/hero-image2.png";
import Hero3 from "../assests/images/hero-img3.png";
import styled from "styled-components";

function Home() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenu] = useState(false);
  const [accoutsOpen, setaccountOpen] = useState(false);

  const [search, setSearch] = useState();

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };

  function ResetFunction() {
    setSearch("");
    document.getElementById("searchEle").value = "";
  }

  const Menu = [
    { title: "DashBoard", Bold: true },
    { title: "Intels", icons: <AiOutlineStar /> },
    { title: "Leads", spacing: true, icons: <AiOutlineUser /> },
    {
      title: "Accounts",
      icons: <HiOutlineOfficeBuilding />,
      fixed: true,
      submenuItems: [
        { title: "Manage all" },
        { title: "Track new accounts" },
        { title: "Bulk import" },
      ],
    },
    {
      title: "Preferences",
      icons: <FiSettings />,
      submenu: true,
      submenuItems: [
        { title: "Product Focus" },
        { title: "Intel Preferences" },
        { title: "Lead Persona" },
      ],
    },
    { title: "Integrations", icons: <BsLink45Deg /> },
    { title: "Team", spacing: true, icons: <AiOutlineTeam /> },
    { title: "Help/Support", icons: <TbMessages /> },
  ];

  return (
    <div className="flex">
      <SideBar
        className={`bg-white ${
          search === "" || typeof search === "undefined" ? "h-auto" : "h-screen"
        }  p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-black text-3xl  rounded-full
          absolute -right-2 top-16 border border-black cursor-pointer duration-100 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <img
            src={Logo}
            alt="logo"
            className={`cursor-pointer float-left mr-2 pr-1 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={` origin-left text-2xl font-semibold  duration-300 ${
              !open && "scale-0"
            }`}
          >
            B2Brain
          </h1>
        </div>
        <ul className="pt-2">
          {Menu.map((menu, i) => (
            <div key={i}>
              <li
                className={`${
                  menu.Bold ? " font-black " : "opacity-50"
                } text-sm flex-items-center gap-x-4 cursor-pointer p-2 
                  hover:bg-light-white rounded-md mt-2 duration-300 ${
                    !open ? "mt-6" : "mt-2"
                  }`}
              >
                <Icons className=" block float-left pr-2">
                  {menu.icons ? menu.icons : <RiDashboardFill />}
                </Icons>
                <span
                  className={` text-base font-medium flex ml-2 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                  {menu.submenu && open && (
                    <BsChevronDown
                      className={`ml-20 mt-1 text-large font-medium flex duration-200 ${
                        submenuOpen && "rotate-180"
                      }`}
                      onClick={() => {
                        setSubmenu(!submenuOpen);
                      }}
                    />
                  )}
                  {menu.fixed && open && (
                    <BsChevronDown
                      className={`ml-24 mt-1 text-large font-medium flex duration-200 ${
                        accoutsOpen && "rotate-180"
                      }`}
                      onClick={() => {
                        setaccountOpen(!accoutsOpen);
                      }}
                    />
                  )}
                </span>
              </li>

              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItems, index) => (
                    <li
                      key={index}
                      className={`text-black-300 opacity-50 text-sm flex-items-center gap-x-4 cursor-pointer
                      hover:bg-light-white rounded-md p-2 px-5 mt-2`}
                    >
                      {submenuItems.title}
                    </li>
                  ))}
                </ul>
              )}
              {menu.fixed && accoutsOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItems, index) => (
                    <li
                      key={index}
                      className={`text-black-300 opacity-50 text-sm flex-items-center gap-x-4 cursor-pointer
                      hover:bg-light-white rounded-md p-2 px-5 mt-2`}
                    >
                      {submenuItems.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </SideBar>
      <div className="p-2">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pr-9">
            <svg className="h-5 w-9 fill-slate-300" viewBox="0 0 20 20">
              {search === "" || typeof search === "undefined" ? (
                <BsSearch />
              ) : (
                <GrClose onClick={ResetFunction} className="cursor-pointer" />
              )}
            </svg>
          </span>
          <Search>
            <input
              className={`placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300
              py-2 pl-9 pr-80 shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm duration-300
              `}
              placeholder="Search by account name or company website."
              type="text"
              name="search"
              id="searchEle"
              onChange={inputHandler}
            />
          </Search>
        </label>
        {search === "" || typeof search === "undefined" ? (
          <Hero className="hero__container">
            <div className="hero_img hero__img__1">
              <img src={Hero1} alt="header1" />
            </div>
            <div className="hero_img hero__img__2">
              <img src={Hero2} alt="heroimage" />
            </div>
            <div className="hero_img hero__img__3">
              <img src={Hero3} alt="heroimage" />
            </div>
          </Hero>
        ) : (
          <SearchContent
            className={`duration-200 ${open ? "w-[80vw]" : "w-[93vw]"}`}
          >
            <div className="search__content">
              <div className="search__page__left">
                <h3 className="nav__text search__heading">Similar accounts</h3>

                <SearchBar search={search} />
              </div>
              <div className="search__page__right">
                <h3 className="nav__text search__heading">Quick Actions</h3>
                <div className="quick__action__content">
                  <p className="nav__text text">Track new account</p>
                  <p className="nav__text text">Bulk track accounts</p>
                  <p className="nav__text text">Manage Account</p>
                </div>
              </div>
            </div>
          </SearchContent>
        )}
      </div>
    </div>
  );
}

//styles

const SideBar = styled.div`
  box-shadow: 4px 0px 16px rgba(30, 30, 30, 0.08);
  z-index: 2;
`;

const Hero = styled.div`
  img {
    width: 95vw;
  }
`;

const Icons = styled.div`
  margin-top: 4px;
  color: gray;
  font-size: 1.2rem;
`;

const Search = styled.div`
  input {
    width: 100%;
    height: 7vh;
    margin: 0;
    border-radius: 0;
  }
`;

const SearchContent = styled.div`
  .search__content {
    display: grid;
    grid-template-columns: 70% 30%;
    padding: 2.5rem;
    grid-gap: 2rem;
  }

  .search__heading {
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
    opacity: 0.6;
  }

  .quick__action__content {
    padding-top: 1.2rem;
  }

  .search__page__right .text {
    font-weight: 700;
    font-size: 14px;
    padding-top: 19px;
  }
`;

export default Home;
