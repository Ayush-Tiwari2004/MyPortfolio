import React from "react";
import { FaHome, FaPhone, FaUser } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

export const Sidebar = () => {
        return(
            <section>
                <div className="fixed mt-[12%]">

                <div className="text-white absolute left-[-120px] bg-gray-700 border-property flex flex-col py-8 w-16 items-center gap-12">
                    <a href="#home"><FaHome className="text-3xl"/></a>
                    <a href="#about"><FaUser className="text-3xl"/></a>
                    <a href="#myproject"><FaPhone className="text-3xl"/></a>
                    <a href="#getin-tough"><IoMdMailUnread className="text-3xl"/></a>
                </div>
                </div>
            </section>
        )
} 