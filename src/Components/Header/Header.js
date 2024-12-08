import React, { useContext } from 'react'; 
import { TfiLocationPin } from "react-icons/tfi"; 
import { FiSearch } from "react-icons/fi"; 
import { BiCart } from "react-icons/bi"; 
import classes from './Header.module.css'; 
import LowerHeader from './LowerHeader'; 
import { Link } from 'react-router-dom'; 
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/firebase';

function Header() {
  const [{user, basket }, dispatch]=useContext(DataContext)
  const totalItem =basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)
  console.log(basket.length)
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* Logo */}
            <Link to='/'> {/* Changed href to to for Link component */}
              <img 
                src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                alt='Amazon Logo' 
              />
            </Link>

            <div className={classes.delivery}>
              {/* Delivery */}
              <span>
                <TfiLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            {/* Search */}
            <select name='' id=''> {/* Ideally, you'd want to provide name and id */}
              <option value=''>All</option>
            </select>
            <input 
              type='text' 
              name='' 
              id='' 
              placeholder='Search product' 
            />
            <FiSearch size={25} />
          </div>

          {/* Right side links */}
          <div className={classes.order_container}>
            <div className={classes.flag_container}>
              <img 
                src='https://cdn.icon-icons.com/icons2/230/PNG/256/UnitedStates_US_USFlag_840_Flag1_26093.png' 
                alt='' 
              />
              <select name='' id=''> {/* Ideally, you'd want to provide name and id */}
                <option value=''>EN</option>
              </select>
            </div>

            {/* Sign In Component */}
            <Link to={!user && "/auth"}> {/* Correct path for Sign In */}
              <div>
                  { user?(
                    <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={()=>auth.signOut()}>Sign out</span>
                    </>

                      
                    ):(
                      <>
                      <p>Hello, Sign In</p>
                      <span>Account & Lists</span>
                      </>

                      
                  
                  )}
                
              </div>
              
              
            </Link>

            {/* Orders */}
            <Link to='/orders'> {/* Changed href to to for Link component */}
              <p>Returns</p>
              <span>& Orders</span> {/* Corrected span spelling */}
            </Link>

            <Link to='/cart' className={classes.cart}> {/* Changed href to to for Link component */}
              <BiCart size={35} />
              <span>{totalItem}</span> {/* Corrected span spelling */}
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header; // Corrected export statement
