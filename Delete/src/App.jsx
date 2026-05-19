import Cards from "./Cards"
const Social = [
  {
    id: 1,
    name: "Linkedin",
    link: "https://www.linkedin.com/feed/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/3840px-LinkedIn_icon_circle.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  },
  {
    id: 2,
    name: "Indeed",
    link: "https://in.indeed.com/",
    img: "https://images.ctfassets.net/pdf29us7flmy/6QbAvgh7R9hr8lxKJkVyV1/5cd7acf551f0f9b6160eb886d1ae7440/SQUARE-Indeed_2021_Icon_RGB_Blue.png",
  },
  {
    id: 3,
    name: "naukri",
    link: "https://www.naukri.com/",
    img: "https://e7.pngegg.com/pngimages/373/665/png-clipart-naukri-com-employment-website-job-hunting-online-job-search-india-employment.png",
  },
  {
    id: 4,
    name: "Instagram",
    link: "https://www.instagram.com/?hl=en",
    img: "https://png.pngtree.com/element_our/sm/20180630/sm_5b37de3263964.jpg",
  },
  {
    id: 5,
    name: "FaceBook",
    link: "https://www.facebook.com/",
    img: "https://static.vecteezy.com/system/resources/thumbnails/018/930/476/small_2x/facebook-logo-facebook-icon-transparent-free-png.png",
  },
  {
    id: 6,
    name: "Whatsapp",
    link: "https://web.whatsapp.com/",
    img: "https://download.logo.wine/logo/WhatsApp/WhatsApp-Logo.wine.png",
  },
  {
    id: 7,
    name: "Telegram",
    link: "https://web.telegram.org/a/",
    img: "https://e7.pngegg.com/pngimages/380/592/png-clipart-telegram-computer-icons-logo-scalable-graphics-post-it-note-angle-triangle.png",
  },
  
];
function App() {
  return (
    <div>
      <Cards Social={Social} />
    </div>
  );
}
export default App;
