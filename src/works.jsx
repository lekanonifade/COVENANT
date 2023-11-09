import React from "react";

export default function Works() {
    return (
        <body className="grid gap-10" id="works">

            <p className="h-8"></p>

            <div className="flex flex-col lg:flex-row w-full">
                <div className="lg:w-1/2 lg:p-0 p-10 fintech lg:px-[10%] lg:h-full h-[50vh] flex flex-col gap-3 lg:items-start lg:text-left text-center items-center justify-center">
                    <p className="text-xl">
                        Product Design
                    </p>
                    <p className="text-2xl font-bold">
                        Managing Your Money With Ease And Convenience
                    </p>
                    <p className=" text-base">
                        Copak is a finance app that helps users manage there spending easily as well helps users keep track of important spending with minimal efforts.
                    </p>
                    <p className="text-xs h-8 p-2 rounded-sm bg-[#1AA881]">
                        Fintech
                    </p>
                    <a href="https://www.behance.net/gallery/159108909/Copak-App-UIUX-Case-study">
                        <button className="text-xs w-52 h-14 border button">
                            View Project
                        </button>
                    </a>
                </div>
                <div className="lg:w-1/2 w-full">
                    <img src="/images/works-fintech.svg" alt="fintech" className="w-full h-auto" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full">
                <div className="lg:w-1/2 lg:p-0 p-10 transport lg:px-[10%] lg:h-full h-[50vh] flex flex-col gap-3 lg:items-start lg:text-left text-center items-center justify-center">
                    <p className="text-xl">
                        UX Design
                    </p>
                    <p className="text-2xl font-bold">
                        Uber Move
                    </p>
                    <p className=" text-base">
                        Developing a new feature for the Uber mobile application which  is the Uber move which makes moving of load and lugages  from one place or  from one geographical location to another with just a few tap on the app.
                    </p>
                    <p className="text-xs h-8 p-2 rounded-sm bg-[#FF9D34]">
                        Transport
                    </p>
                    <a href="https://www.behance.net/gallery/146633267/Uber-Move-Case-Study">
                        <button className="text-xs w-52 h-14 border button">
                            View Project
                        </button>
                    </a>
                </div>
                <div className="lg:w-1/2 w-full">
                    <img src="/images/works-transport.svg" alt="transport" className="w-full h-auto" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full">
                <div className="lg:w-1/2 lg:p-0 p-10 rio lg:px-[10%] lg:h-full h-[50vh] flex flex-col gap-3 lg:items-start lg:text-left text-center items-center justify-center">
                    <p className="text-xl">
                        UX/UI Design
                    </p>
                    <p className="text-2xl font-bold">
                        Delivering Your Parcels With Speed And Care
                    </p>
                    <p className=" text-base">
                        RIO is a startup that provides courier and parcels service , with  RIO courier service  people can deliver goods and parcels everywhere in the country.
                    </p>
                    <p className="text-xs h-8 p-2 rounded-sm bg-[#ED1C24]">
                        P2p And B2p
                    </p>
                    <a href="https://www.behance.net/gallery/148161427/RIO-courier-and-parcel-UX-Case-Study">
                        <button className="text-xs w-52 h-14 border button">
                            View Project
                        </button>
                    </a>
                </div>
                <div className="lg:w-1/2 w-full">
                    <img src="/images/works-rio.svg" alt="rio" className="w-full h-auto" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full">
                <div className="lg:w-1/2 lg:p-0 p-10 shipment lg:px-[10%] lg:h-full h-[50vh] flex flex-col gap-3 lg:items-start lg:text-left text-center items-center justify-center">
                    <p className="text-xl">
                        Product Design
                    </p>
                    <p className="text-2xl font-bold">
                        Navigating The Africa Seas Of Trade
                    </p>
                    <p className=" text-base">
                        A web application that connects African businesses to worldwide marketplaces with incredible ease and efficiency through end-to-end supply chain management.
                    </p>
                    <p className="text-xs h-8 p-2 rounded-sm bg-[#3675D4]">
                        P2p And B2p
                    </p>
                    <a href="">
                        <button className="text-xs w-52 h-14 border button">
                            View Project
                        </button>
                    </a>
                </div>
                <div className="lg:w-1/2 w-full">
                    <img src="/images/works-shipment.svg" alt="shipment" className="w-full h-auto" />
                </div>
            </div>

        </body>
    )
}