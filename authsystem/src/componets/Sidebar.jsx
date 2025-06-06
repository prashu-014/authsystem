import React from "react";

const Sidebar = () => {
  const Menulist = [
    {
      name: "Dashabord",
      url: "/dashbaord",
    },
    {
      name: "roles",
      url: "/roles",
    },
    {
      name: "User",
      url: "/User",
    },
    {
      name: "Enterprises",
      url: "/Enterprises",
    },
    {
      name: "Employess",
      url: "/Employess",
    },
    {
      name: "Product",
      url: "/Product",
    },
  ];

  return (
    <aside className="col-span-1 bg-blue-700 flex flex-col gap-4">
      <h1 className="text-2xl font-bold bg-white py-4 px-2">AuthSystem</h1>

      <ul className=" flex flex-col ">
        {Menulist.map((menu) => (
          <li key={menu.name}>
            <a
              href={menu.url}
              className="capitalize block p-2 text-white hover:bg-blue-600"
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
