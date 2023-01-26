import React from "react";

export default function AuthLayout({ children, header }) {
  return (
    <div className="h-screen flex">
      <div className="w-[40%] h-full auth_layout_bg hidden md:block" />

      <div className="w-full md:w-[60%] pt-7 md:pt-20 max-h-screen overflow-y-auto px-5">
        <h2 className="text-[#39170F] text-xl md:text-3xl font-bold">
          {header}
        </h2>

        <div className="max-w-[600px]">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
