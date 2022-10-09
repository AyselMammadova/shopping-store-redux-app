import React from "react";
import Product from "./Product";
import Sidebar from "./Sidebar";
import Tags from "./Tags";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);

  const myTabs = [
    { id: 1, name: "Tümü" },
    { id: 2, name: "Yeni gelenler" },
    { id: 3, name: "İndirimler" },
    { id: 4, name: "Çok satanlar" },
  ];

  return (
    <>
      <div className="flex flex-wrap w-[100%]">
        <div className="w-[100%]">
          <div className="mb-[20px] flex items-center justify-between rounded-[15px] bg-white py-[10px] px-[20px]">
            <div className="all-products flex items-center">
              <img src="/images/shop.svg" alt="shop" className="mr-[10px]" />
              <p className="mb-0 text-xxsm font-semibold text-black">
                Ürün sayı:
                <span className="font-normal text-red ml-[6px]">23244</span>
              </p>
            </div>

            <ul
              className="flex mb-0 list-none flex-wrap flex-row"
              role="tablist"
            >
              {myTabs.map((tab) => (
                <li key={tab.id} className="mx-[5px] flex-auto">
                  <a
                    className={`border border-solid rounded-[8px] text-sm block w-[134px] h-[40px] flex items-center justify-center
                          ${
                            openTab === tab.id
                              ? "border-red font-semibold text-red"
                              : "border-bord text-tx"
                          }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(tab.id);
                    }}
                    data-toggle="tab"
                    href={`#link${tab.id}`}
                    role="tablist"
                  >
                    {tab.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center order-drop text-sm text-tx border border-solid rounded-[8px] border-bord h-[40px] px-[12px] cursor-pointer">
              Sıralama seçin
              <img
                src="/images/arrow-down.svg"
                alt="down"
                className="ml-[15px]"
              />
            </div>
          </div>

          <div className="relative">
            <div>
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="grid grid-cols-12 gap-20">
                      <div className="col-span-3">
                        <Sidebar />
                      </div>
                      <div className="col-span-9">
                        <Tags />
                        <Product />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
