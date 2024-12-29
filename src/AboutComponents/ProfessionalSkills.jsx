import React from "react";
import cardsData from "../API/cardsData.json"

export const ProfessionalSkills = () => {

    return (
        <section id="professtional" className="py-10">
            <div className="container mx-auto text-white mb-5 md:mt-0 p-5">
                <div className="flex flex-col items-start justify-center">
                    <div className="text-center w-full">
                        <h1 className="text-slate-800 dark:text-white font-bold">Professional Skills</h1>
                    </div>
                    <div id="frontend" className="text-slate-800 dark:text-white flex flex-col gap-6 w-full my-10">
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {
                                cardsData.map((card) => {
                                    return (
                                        <div key={card.id} className="bg-white dark:bg-[#212126] shadow-gray-300/60 dark:shadow-gray-950/20 shadow-lg p-4 rounded-xl border dark:border-gray-700 hover:border-[#5500FF] hover:scale-105 transition-transform duration-500">
                                                <h4 className="font-bold text-center">{card.category}</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                        {
                                            card.skills.map((item) => (
                                                <div key={item.title} className="flex items-center bg-white dark:bg-[#212126] shadow-gray-300/60 dark:shadow-gray-950/20 shadow-lg p-1 rounded-lg border dark:border-gray-700 hover:border-[#5500FF] transition-transform duration-500">
                                                    <img src={item.img_url} className="inline-block h-8 w-8 mr-2" alt={item.title} />
                                                    <p className="text-[16px] text-slate-800 dark:text-white font-bold">{item.title}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="text-center leading-7 h-64 flex items-center justify-center">
                    <h3 className="text-slate-700 dark:text-white">"There are no limits to what you can accomplish <br />
                        <span className="text-[18px]"> except the limits you place on your own thinking. "</span></h3>
                </div>
            </div>
        </section>
    )
}