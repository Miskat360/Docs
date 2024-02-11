import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.2} className=" relative w-60 h-72 bg-zinc-900/90 rounded-[30px] px-8 py-10 text-white overflow-hidden">
        <FaFileLines />
        <p className="text-sm my-5 leading-tight font-semibold">{data.discrip}</p>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex justify-between px-8 py-3 mb-3">
            <p>{data.fileSize}</p>
            <span className="bg-zinc-600 w-5 h-5 rounded-full text-white flex justify-center items-center text-[.7rem]">
              {data.close ? <IoClose /> : <LuDownload />}
            </span>
          </div>
          {data.tag.isOpen && (
            <div className={`w-full flex ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"} justify-center py-4 items-center`}>
              <h3 className="text-sm font-semibold">{data.tag.tagName}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  )
}

export default Card