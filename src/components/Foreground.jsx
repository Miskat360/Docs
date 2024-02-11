import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null)
  const data = [
    {
      discrip: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagName: "Try Later",
        tagColor: "blue"
      }
    },
    {
      discrip: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".4mb",
      close: false,
      tag: {
        isOpen: false,
        tagName: "Download Now",
        tagColor: "green"
      }
    },
    {
      discrip: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".5mb",
      close: false,
      tag: {
        isOpen: true,
        tagName: "Download Now",
        tagColor: "green"
      }
    }
  ]
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 w-full h-screen z-[3] flex flex-wrap gap-4 p-4">
        {data.map((item, index) => (
          <Card data={item} reference={ref}/>
        ))}
      </div>
    </>
  )
}

export default Foreground