import React from 'react'

const conversation = () => {
    return (
        <>
            <button
                className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
            >
                <div
                    className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full"
                >
                    M
                </div>
                <div className="ml-2 text-sm font-semibold">Marta Curtis</div>
                <div
                    className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none"
                >
                    2
                </div>
            </button>
        </>
    )
}
export default conversation