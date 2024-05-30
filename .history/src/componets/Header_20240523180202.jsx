import { cart, insta, user } from "../assets"


const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky">
      <div className="max-w-screen-x1 h-full mx-auto flex items-center justify-between" > 
        <div>
          <img className="h-12 ml-2" src={insta} alt='inst'/>
        </div> 
        <div className="flex items-center gap-8 mr-5">
        <ul className="flex items-center gap-8 mr-5">
          <li>Home</li>
          <li>pages</li>
          <li>shope</li>
          <li>element</li>
          <li>blog</li>
        </ul>
        <div className="relative">
        <img className="h-6" src={cart} alt='cart' />
        <span className="absolute w-6 top-4 left-3 text-sm flex items-center justify-center font-semibold ">0</span>
        
      </div>
      <div>
        <img className="h-10" src={user} alt = "user"/>
      </div>
      

      </div>

      
      </div>
      
    </div>
  )
}

export default Header
