import React from 'react'

const Search = () => {
    return (
        <>

            <form className=" flex md:flex-row gap-3">
                <div className="flex ">
                    <input type="text" placeholder="Search for projects"
                        className="  w-[60vw] px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
                    />
                    <button type="submit" className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
                </div>
                <select id="pricingType" name="pricingType"
                    className=" h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                    <option value="All" selected="">All</option>
                    <option value="Openscience">open science</option>
                    <option value="Opensource">open source</option>
                    <option value="newbie">beginner</option>
                    <option value="medium">intermediate</option>
                    <option value="expert">professional</option>
                </select>
                <select id="pricingType" name="pricingType"
                    className=" h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                    <option value="All" selected="">All</option>
                    <option value="Openscience">open science</option>
                    <option value="Opensource">open source</option>
                    <option value="newbie">beginner</option>
                    <option value="medium">intermediate</option>
                    <option value="expert">professional</option>
                </select>
            </form>
        </>
    )
}
export default Search