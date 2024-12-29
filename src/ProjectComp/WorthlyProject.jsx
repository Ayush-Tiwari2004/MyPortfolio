import React from "react";
import ProjectShowcase from "./ProjectShowcase";

export const WorthlyProject = () => {
    return (
        <section id="worthly-projects">
            <div className="container mx-auto p-5 text-white w-full flex flex-col justify-center items-center">
                <div className="my-10">
                    <p className="font-bold sm:font-semibold text-slate-800 text-[34px] sm:text-[48px] dark:text-white">Here are my projects</p>
                </div>
                    <ProjectShowcase />
            </div>
        </section>
    );
}

