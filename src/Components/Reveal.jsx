import {useEffect, useRef} from 'react';
import {motion, useInView, useAnimation} from 'framer-motion';

const Reveal = ({children, width = "fit-content"}) => {
  return (
    <div className=''>
        <div>{children}</div>
    </div>
  )
}

export default Reveal