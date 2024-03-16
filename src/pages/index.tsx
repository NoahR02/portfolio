"use client"

import Image from "next/image";
import {Inter} from "next/font/google";
import {Check, Copy, ExternalLink, Github, Linkedin, LinkedinIcon, PlusIcon} from "lucide-react";
import {Icons} from "@/components/Icons";
import {CopyToClipboard} from "@/components/CopyToClipboard";

export default function Home() {

    return (
        <main className={"sm:container mx-auto p-5"}>

            <div className={"grid max-w-[100%] md:grid-cols-2 mt-4 gap-6"}>

                <div className={"bento-container shadow-md shadow-white flex flex-col col-span-2"}>

                    <div className="flex justify-end gap-5">
                        <a target="_blank" href="https://github.com/NoahR02"><Icons.gitHub className="w-6 h-6"/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/noahreppert"><Linkedin
                            className="w-6 h-6"/></a>
                    </div>

                    <h2 className="text-2xl mb-[15px] text-gray_text">{"Software Developer"}</h2>

                    <div>
                        <h2 className="text-3xl md:text-4xl lineh font-bold">{"Hi, I'm Noah Reppert"}</h2>
                        <p className="text-gray_text text-xl md:max-w-[400px] sm:max-w-[300px] mt-5 mb-[32px]">I like to
                            create software based on
                            things
                            that interest me or that improve my daily life.</p>
                        <div className={"flex gap-4"}>

                            <div
                                className={"shadow-[-2px_3px_24px_rgba(98,100,238,0.29)] bg-[#3b3b6c] flex items-center justify-center h-[42px] rounded-sm"}>
                                <a href="mailto:noahreppert95@gmail.com"
                                   className={"text-center w-[125px] text-md hidden md:block"}>Get in Touch</a>
                                <div
                                    className={"flex items-center w-[270px] max-w-[100%] h-[100%] bg-[#161616] border-[2px] border-[#262626] border-y-0 border-x-0 text-[#C0C0C0] "}>
                                    <a href="mailto:noahreppert95@gmail.com"
                                       className={"mx-auto"}>noahreppert95@gmail.com</a>

                                    <CopyToClipboard copyContent={"noahreppert95@gmail.com"}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                <div className={"bento-container shadow-sm shadow-blue-200 lg:col-span-1 col-span-2 row-span-2"}>
                    <h3 className="list-item list-disc text-xl font-bold text-gray_text mb-4">Recent Work</h3>
                    <div>
                        <div className="w-[100%] text-xl">
                            Full Stack Web Developer
                            <span className="text-gray_text"> @ Schweb Design</span>
                        </div>
                        <div className="text-gray_text text-lg">May 2022 - Dec. 2023</div>
                    </div>
                </div>

                <div className={"bento-container shadow-sm shadow-green-200 lg:col-span-1 col-span-2"}>
                    <h3 className="list-item list-disc text-xl mb-4 font-bold text-gray_text">Education</h3>
                    <div className="flex flex-col">
                        <div className="text-xl">Montgomery County Community College</div>
                        <div className="text-blue-200 text-lg">A.S. in Computer Science</div>
                        <div className="text-gray_text text-lg">Aug. 2020 - May 2024</div>
                    </div>
                </div>

                <div className={"bento-container shadow-sm shadow-red-200 lg:col-span-1 col-span-2"}>
                    <h3
                        className="list-item list-disc text-xl mb-4 font-bold text-gray_text">Certifications</h3>
                    <div className="flex flex-wrap items-center justify-between md:items-start gap-4">
                        <div>
                            <div className="text-xl"> Microsoft Certified: Azure Fundamentals </div>
                            <div className="text-gray_text text-lg">Issued March 2024</div>
                            <a href="https://learn.microsoft.com/api/credentials/share/en-us/NoahReppert-4607/5651F878BA8EFB32?sharingId"
                               target="_blank"
                               className="flex items-center justify-center gap-5 border rounded-xl size-fit px-5 py-1 min-w-[150px] border-gray-200 mt-4 text-gray_text text-lg">
                                Show credential<ExternalLink/>
                            </a>
                        </div>
                        <img width={"120px"} height="auto" src="/microsoft-certified-fundamentals-badge.svg"
                             alt={"A Microsoft Certified Fundamentals Badge for Azure Fundamentals"}/>
                    </div>
                </div>
            </div>

        </main>
    );
}
