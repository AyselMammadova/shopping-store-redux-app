import React, { useState } from "react";
import Product from "./Product";
import Sidebar from "./Sidebar";
import Tags from "./Tags";
import Select from "react-select";
import Image from "next/image";


const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);

  const myTabs = [
    { id: 1, name: "Tümü" },
    { id: 2, name: "Yeni gelenler" },
    { id: 3, name: "İndirimler" },
    { id: 4, name: "Çok satanlar" },
  ];

  // select
  const orders = [
    { value: 'asc', label: 'Köhnədən Yeniyə' },
    { value: 'desc', label: 'Yenidən Köhnəyə' },
    { value: 'abc', label: 'A-dan Z-ə' },
    { value: 'cba', label: 'Z-dən A-ya' }
  ]

  const customStyles = {
      control: (base, state) => ({
          ...base,
          borderRadius: "8px",
          border: "1px solid rgba(196, 196, 196, 0.7)",
          boxShadow: "none",
          background: '#fff',
          fontSize: '14px',
          lineHeight: '18px',
          cursor: 'pointer',
          height: '40px',
          "&:hover": {
              border: "1px solid rgba(196, 196, 196, 0.7)",
              boxShadow: "none"
          }
      }),
      placeholder: (base, state) => ({
          ...base,
          color: '#666666'
      }),
      dropdownIndicator: (base, state) => ({
          ...base,
          color: '#53535380'
      }),
      option: (base, state) => ({
          ...base,
          color: "#000",
          backgroundColor: state.isSelected ? "#FAF9F9" : "#fff",
          cursor: state.isSelected ? "none" : "pointer",
          "&:hover": {
              backgroundColor: state.isSelected ? "#FAF9F9" : "#fff"
          }
      }),
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }



  return (
    <>
      <div className="flex flex-wrap w-[100%]">
        <div className="w-[100%]">
          <div className="mb-[20px] flex flex-wrap items-center justify-between rounded-[15px] bg-white py-[10px] px-[20px]">
            <div className="all-products flex items-center">
              <Image src="/images/shop.svg" alt="shop" widht="16px" height="15px" className="mr-[10px]" />
              <p className="mb-0 text-xxsm font-semibold text-black">
                Ürün sayı:
                <span className="font-normal text-red ml-[6px]">23244</span>
              </p>
            </div>

            <ul
              className="flex list-none flex-wrap flex-row"
              role="tablist"
            >
              {myTabs.map((tab) => (
                <li key={tab.id} className="mr-[10px] flex-auto mt-[10px] md-mt-0">
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

            <div className="mt-[10px] md-mt-0">
              <Select 
                value={selectedOption}
                instanceId={1}
                onChange={handleChange}
                styles={customStyles}
                options={orders} 
                placeholder={<div>Sıralama seçin</div>} 
                components={{
                    IndicatorSeparator: () => null
                }}
              />
            </div>
          </div>

          <div className="relative">
            <div>
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="grid sm:grid-cols-12 gap-8">
                      <div className="hidden sm:block sm:col-span-4 2md:col-span-3">
                        <Sidebar />
                      </div>

                      <div className="col-span-1 sm:col-span-8 2md:col-span-9">
                        <div className="hidden 2md:block">
                          <Tags />
                        </div>

                        <Product />

                    </div>
                  </div>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="grid sm:grid-cols-12 gap-8">
                      <div className="hidden sm:block sm:col-span-4 2md:col-span-3">
                        <Sidebar />
                      </div>
                      <div className="col-span-1 sm:col-span-8 2md:col-span-9">
                        <div className="hidden 2md:block">
                          <Tags />
                        </div>

                        <h6 className="2md:mt-[20px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto totam, animi perferendis iure error aperiam. Aspernatur sit qui nulla obcaecati deserunt suscipit libero, provident beatae optio ipsum tempora laboriosam ducimus!</h6>
                    
                    </div>
                  </div>
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="grid sm:grid-cols-12 gap-8">
                      <div className="hidden sm:block sm:col-span-4 2md:col-span-3">
                        <Sidebar />
                      </div>
                      <div className="col-span-1 sm:col-span-8 2md:col-span-9">
                        <div className="hidden 2md:block">
                          <Tags />
                        </div>

                        <h6 className="2md:mt-[20px]">Lorem ipsum testtttt</h6>
                    
                    </div>
                  </div>
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <div className="grid sm:grid-cols-12 gap-8">
                      <div className="hidden sm:block sm:col-span-4 2md:col-span-3">
                        <Sidebar />
                      </div>
                      <div className="col-span-1 sm:col-span-8 2md:col-span-9">
                        <div className="hidden 2md:block">
                          <Tags />
                        </div>

                        <h6 className="2md:mt-[20px]">Lorem ipsum, dolor sit amet consectetur</h6>
                    
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
