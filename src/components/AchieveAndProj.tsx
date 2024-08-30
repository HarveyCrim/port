import { useState } from "react"
import AchieveCard from "./AchieveCard"
import ProjectCard from "./ProjectCard"
const AchieveAndProj = () => {
  const [achieve, isAchieve] = useState<boolean>(false)
  return (
    <div className="bg-[#1b1f23] flex min-h-[600px] flex-col pt-[70px] pb-[70px] items-center">
      <div className="bg-black cursor-pointer rounded-full flex gap-5 p-3 md:p-5 flex items-center">
        <div onClick = {() => isAchieve(false)} className={`md:text-2xl inline-block rounded-flex flex items-center ${!achieve && "border-b-2 border-b-green-500 bg-white text-black"} justify-center ${achieve && "text-white"} rounded-full font-medium w-[100px] md:w-[130px] md:h-[40px]`}>Projects</div>
        <div onClick = {() => isAchieve(true)} className={`md:text-2xl inline-block rounded-flex flex items-center justify-center ${achieve && "border-b-2 border-b-green-500 bg-white text-black"} rounded-full ${!achieve && "text-white "} font-medium w-[125px] md:w-[180px] md:h-[40px] `}>Achievements</div>
      </div>
      {achieve && <div className="space-y-10 mt-[20px] px-[30px] md:px-0">
        <AchieveCard org = {"Codeforces.com"} url = {"https://codeforces.com/profile/Harwinvanak2"} points = {[
          "Expert on Codeforces.com. Among the top 2% on the global leaderboards of Codeforces.com",
          "Ranked 58th/1100 in all Canada on Codeforces.com",
          "Global rank: 254th/23560 in Codeforces Round 942"
        ]}/>
        <AchieveCard org = {"LeetCode.com"} url = {"https://leetcode.com/u/harwin1999/"} points = {[
          "Knight on LeetCode.com. Among the top 3.4% on the global leaderboards of LeetCode.com",
        
          "Global rank: 440th/20192 in LeetCode Global Contest 395"
        ]}/>
      </div>}
      {
        !achieve && <div className="mt-[30px] space-y-9">
  
          <ProjectCard name = {"InfiChat"} url = {"https://infitchat-frontendxx.onrender.com/"} points = {[
            "Real-time chatting app built with ReactJS, TypeScript, ContextAPI, React-Redux, React-Query, Cloudinary, React-Icons, Socket.IO, ExpressJS, Auth0, Mongoose",
            "Utilizes websockets for real time notification and chat functionality along with ExpressJS for handling Socket.IO server module, while utilizing ReactJS for Socket.IO client module.",
            "Remote state management and all external API requests for entire functionality handled through React-Query library.",
            "Utilizes React-redux for global state management for the whole application while utilizing Context API to prevent prop drilling for the client-side websocket instance.",
            "Utilizes Mongoose for fast API responses and all database handling whereas all authorization is done using Auth0 by OKta and JSON web-tokens. The JSON web-token is verfied in each API call.",
            "Utilizes cloudinary for all media uploads syncing the URL of each media upload with the appropriate user account."
          ]} array={[
            {
              img:"./public/iland.png",
              text: "URL takes you to the landing page"
            },
            {
              img:"./public/infiauth0.png",
              text: "Auth0 handles the authentication but with each sign in, a new jsonwebtoken is generated."
            },
            {
              img:"./public/infiadd.png",
              text: "Search for a potential friend and send a friend request"
            },
            {
              img:"./public/infiadded.png",
              text: "Once added, a notification is sent to the receiver"
            },
            {
              img:"./public/infinoti.png",
              text: "Once notification is received and friends request is accepted, you become friends"
            },
            {
              img:"./public/infifriends.png",
              text: "Once you are friends with someone, you can chat with them"
            },
            {
              img:"./public/infisentmess.png",
              text: "Sending a message happens in real time and is taken care of by Socket.IO"
            },
            {
              img:"./public/infireceived.png",
              text: "Receiving a message happens in real time and is taken care of by Socket.IO"
            },
            {
              img:"./public/infimessageopen.png",
              text: "If the user is currently chatting with someone else, it adds to the queue of notifications and is only loaded once the user opens that specific chat."
            },
          ]}/>
          <ProjectCard name = {"Hungry"} url = {"https://hungryfrontend34.onrender.com/"} points = {[
            "Food Delivery app build with ReactJS, TypeScript, React-Hook_forms, React-Redux, React-Query, Cloudinary, React-Icons, ExpressJS, Auth0, Mongoose, Stripe",
            "Utilizes Stipe API with full integration for real time payment deposits.",
            "Utilizes React-redux (reduxjs-toolkit) for global state management for the whole application segregated in different slices",
            "Utilizes Mongoose for database handling and schema and model creation for all aspects of the project",
            "Utilizes React-Hook-Form for form creation and validation thorughout entire project",
            "User authentication done with a combination of Auth-0 and JSON-web-tokens",
            "Utilizes cloudinary for all media uploads."
          ]} array={[
            {
              img:"./public/hungrylanding.png",
              text: "URL takes you to the landing page"
            },
            {
              img:"./public/hungryautho.png",
              text: "Auth0 handles the authentication but with each sign in, a new jsonwebtoken is generated."
            },
            {
              img:"./public/hungrysearch.png",
              text: "Search for restaurants in a particular city. Dummy data for Victoria"
            },
            {
              img:"./public/hungrysearchresults.png",
              text: "Search results are displayed in separate window. All filters are operatinal sending different API calls to update results. Pagination is implemented to avoid unneeded data loading."
            },
            {
              img:"./public/hungryopenrestaurant.png",
              text: "Restaurant page to add items to your cart."
            },
            {
              img:"./public/hungryaddtocart.png",
              text: "Once you add items to cart, you can checkout."
            },
            {
              img:"./public/hungryconfirmdetails.png",
              text: "Before checking out, confirm details one last time"
            },
            {
              img:"./public/hungrystripe.png",
              text: "Upon clicking, you are taken to the payments page handled by Stripe"
            },
            {
              img:"./public/hungryrestaurantreceiveorder.png",
              text: "The specific restaurant receives the order and prepares"
            },
            {
              img:"./public/hungryrestaurantprofile.png",
              text: "A page only for restaurant oweners to add items to the menu and make changes."
            },
          ]}/>
          <ProjectCard name = {"VancouverLaptops.com Landing Page"} url = {"https://gleeful-nougat-08316b.netlify.app/"} points = {[
            "Landing page created with ReactJS, framer-motion library",
            
          ]}/>
        </div>
      }
    </div>
  )
}

export default AchieveAndProj