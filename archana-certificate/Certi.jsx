// eslint-disable-next-line no-unused-vars
import React, { useState ,useCallback, useRef  } from 'react'
import "./certi.css"
import cer from "./assets/certi.png";
import { toPng } from 'html-to-image';

const Certi = () => {
    const ref = useRef(null)
    const [name,setName ] = useState("");
    const [course,setCourse ] = useState("");

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
          return
        }
    
        toPng(ref.current, { cacheBust: true, })
          .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = 'certi.png'
            link.href = dataUrl
            link.click()
          })
          .catch((err) => {
            console.log(err)
          })
      }, [ref])

  return (
    <div className='input'>
    <input type='text ' placeholder='enter name ' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
    <input type='text ' placeholder='enter name ' value={course} onChange={(e)=>setCourse(e.target.value)}/>
    <div>
         
        {/* <input type='text' placeholder='enter cource' value={course} onChange={(e)=>setCourse}(e.target)/> */}
    <div className='container' ref={ref}>
  
      <img src={cer} alt="certifications" height={400} />
      <div className='content'>
        <h1>{name}</h1>
        <p>{course}</p>
      </div>
    </div>
    </div>

    <button onClick={onButtonClick}>Click me</button>
    </div>
  )
}

export default Certi;
