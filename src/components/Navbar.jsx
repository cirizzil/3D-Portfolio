import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
           <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFZklEQVR4nO2bW2xUVRSGD061gikViVQUayJGH5Vb0XhJjIrxUo2P+iovJsZAjSh4Q0UjamKk+ADVmHhBK4kmVHkwGqGagERFn7xBhweVFKkiahRq+MzK7Jqd1X05M2fOdDqd/62z/7Vnr79n773WOmuSpIkmmmgiBwAFoAu4F+gDBoEh4FfgOOPxO/At8AnwMnA3cJnMk0wWACcDtwBbgSNUByPAFuA2oCWpRwCzgceAQ+SLn4HHgTOSegAwA1gH/EFtIdvlUeC0iXT+ZqCYwQmx3ak+k78PlDnHslo73gr0plzgn57PN5l51qrP5e9TzaFZDl4ETqmF83OBz1Ms6CCwAljvGHvCmm+cANbYUw7b/cCw5zt3AWfn6fwF5hoLYdQ43QZcBPyjxl9Vc3oFMONvqHGZb4H5DvkuDVnf/LycPxhxXu7wJZbNgBrfJ8KUKUCb+a/bGDBji4DvHev4ScSv9mO/P+L8e7ZzwCXACcW5yTF3UADD6XZ830Iz1u4QeuxJ6KiG860p9vxmHa2ZQMjGB575owIY3keK96aKOF2H5h45ULMK0BtxXk7zacrmLMf+vDqjANcq3qh94MkaTPissSHrPR977MfF6UCP4n0Z+I5UAhjuV4rbo8YLju1wwrX10kZ4xYDz3+kDLbDQe6okwIqYsOZMkLXZED+mlyvAuoDzx+3TXtl1Oh7VM6skwBzgX8U/z8HrcmxB77y+xCYU268P2C5X3EEft1wBDF9SZRvLPbxnFU/8mR2a+3+YrM4HicLaEw+AfsV/wMetUIDVit/v4bWZzNHGI6G57Xw+75R2ovBLNF8AbqWx0R0TYCuNjf6Q8wXgNxobR7w1RmBpwPCwjvgc9pKT27gv+LhVcAgam1XKZmOAO83sfRuLfeSegAADKRb2rrK5PScB7lA270T4Ojpc6SO+FBAgeJ0Ze0k+bFyekwBXKpvdEf4axd/sIw4GBIjW3Ry1vPNzEkBqEzaKEf4yxd/hIxYDAlycYmE6fujISQDJNm0MR/hSm7Ax5COOBAQ4J8XCdPjclpMAkvDYOBrhz1P8wz7isYAA0WzKkYC05CSARKs2RiP86Yp/bKoJMCOtACMBAeZN4i3QmXYLFKf6ITjYoNfg9Wmvwb6AAGtSLOwzZXNFTgJcpWx2RfgPKv4mH7FnqofCXRmToY3KZlVOAtyvbHrLTIYW+ciFKZ0OC4C3aWy8lYRAsyRGIxdFD6VqomD8wZSlLL56Asvi+nX+w1HnBdKBJeFlQIRnEg+AO+vkxchzine0rM4ySq1oPkjS0+WxOzfHV2MdjldjnQ7epQ5e/KWII4UMtcNIZ8ZMj+3eGr0c/cLBOR34QfGGyn45KgBudHR52NjueT2+UvH2ak6FAnwdiuhMHCNrsiHrvyGpFMALhCGF1JMcj6quDVyTRQDgOsWT+eeqiO8Vx/qer9h5gVwbjmqvS4RCJKD60B6vQICPFW+LNdbi6Q7ZLS0+SVZQyr9jTVLb7TPB0yTVXWGTlDRfayyw9vz7jnFZ75zMzpfZJicH41LLZptjUeW2yc10HMbbzNgS03rnapO7MKk2KIkQexJGTXNCu2mU/FuNv55WALOvpU1eN0ouNPe8vurGRI4WYrJuhz3EMWx+KOFqlX0ypQBPexz0heqf2gdjniK0mtshdEWO4S/P532mKdrXLO061HyQdWyQanHuzjvihFjvcAgHqtAuv893xdYElCLGtZHcIQ9I4eYhqfkn9QBglvkFR96p9I/me2Yl9QhK9YRukxZXq7wm9cjXTLGmPn805YKJzRebJEZ6ineYU3zE8xpO6nXfmHNAGrDvMoXayfOzuSaaaCKZbPgP9axX/rjdVFEAAAAASUVORK5CYII="} alt="logo" className="w-19 h-9 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            CBJ &nbsp;
            <span className='sm:block hidden'>| Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className="w-6 h-6 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li 
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[18px] hover:text-white`} 
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
