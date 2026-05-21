import Appstore from "./Appstore";

const data = [
  {
    "id": 1,
    "name": "Instagram",
    "img": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    "category": "Social"
  },
  {
    "id": 2,
    "name": "Facebook",
    "img": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg",
    "category": "Social"
  },
  {
    "id": 3,
    "name": "Twitter",
    "img": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
    "category": "Social"
  },
  {
    "id": 4,
    "name": "Snapchat",
    "img": "https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg",
    "category": "Social"
  },
  {
    "id": 5,
    "name": "Netflix",
    "img": "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png",
    "category": "Entertainment"
  },
  {
    "id": 6,
    "name": "Amazon Prime Video",
    "img": "https://static.vecteezy.com/system/resources/thumbnails/046/437/251/small/amazon-prime-logo-free-png.png",
    "category": "Entertainment"
  },
  {
    "id": 7,
    "name": "Disney+ Hotstar",
    "img": "https://static.vecteezy.com/system/resources/previews/048/041/282/non_2x/disney-plus-hotstar-app-icon-free-png.png",
    "category": "Entertainment"
  },
  {
    "id": 8,
    "name": "Sony LIV",
    "img": "https://static.vecteezy.com/system/resources/previews/075/195/417/non_2x/sony-liv-logo-rounded-glossy-icon-with-transparent-background-free-png.png",
    "category": "Entertainment"
  },
  {
    "id": 9,
    "name": "Paytm",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzgoGnOSSiaow6ecaZ7aUUVU6BcIIAW4p3Q&s",
    "category": "Finance"
  },
  {
    "id": 10,
    "name": "PhonePe",
    "img": "https://static.vecteezy.com/system/resources/previews/067/065/681/non_2x/phonepe-colored-logo-rounded-icon-transparent-background-free-png.png",
    "category": "Finance"
  },
  {
    "id": 11,
    "name": "Google Pay",
    "img": "https://i.pinimg.com/564x/67/28/d8/6728d8f618ff531833c69bd830569376.jpg",
    "category": "Finance"
  },
  {
    "id": 12,
    "name": "BHIM",
    "img": "https://www.uxdt.nic.in/wp-content/uploads/2020/06/BHIM_Preview.png",
    "category": "Finance"
  },
  {
    "id": 13,
    "name": "Swiggy",
    "img": "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
    "category": "Food"
  },
  {
    "id": 14,
    "name": "Zomato",
    "img": "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    "category": "Food"
  },
  {
    "id": 15,
    "name": "Domino's",
    "img": "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg",
    "category": "Food"
  },
  {
    "id": 16,
    "name": "Uber Eats",
    "img": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    "category": "Food"
  }
]

function App(){
  return(
    <>
     <Appstore data={data} />
    </>
  )
}
export default App;