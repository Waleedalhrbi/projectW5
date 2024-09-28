import './App.css';
import Best from './combonent/Best';
import Featured from './combonent/Featured';
import Footer from './combonent/Footer';
import Header from './combonent/Header';
import Invite from './combonent/Invite ';
import MailingList from './combonent/MailingList';
import NavBar from './combonent/NavBar';
import Reviews from './combonent/Reviews';
import Videos from './combonent/Videos';

function App() {
  return (
    <>
     
      <div className="lg:h-screen h-[67vh] sm:h-auto absolute top-0 right-0 bg-[#c99484] w-[30%] sm:w-[30%] lg:w-80"></div>
      
      <NavBar />

      <div className="lg:mt-36 sm:mt-36">  
        <Header />
      </div>
      <Featured></Featured>


      <div className="container mx-auto py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
  <h2 className="text-2xl sm:text-4xl font-bold sm:text-left text-center">Latest Reviews</h2>
  <a
    href="#"
    className="border border-[rgb(190,124,104)] text-[rgb(190,124,104)] px-4 py-2 text-sm font-medium hover:bg-[rgb(190,124,104)] hover:text-white rounded-none transition-colors duration-300 mt-4 sm:mt-0 sm:inline-block w-32"
  >
    View All
  </a>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-[80%] m-auto">
        <Reviews 
            title="Grilled Flank Steak with Chimichurri" 
            description="Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque."
            imgSrc="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg"
          />
          <Reviews 
            title="Mushroom Penne with Walnut Pesto" 
            description="Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam dui eget luctus."
            imgSrc="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg"
          />
          <Reviews 
            title="Garlic Butter White Wine Shrimp Linguine" 
            description="Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis."
            imgSrc="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg"
          />
        </div>
      </div>
 
      <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-6">Best in Class Restaurant</h2>
      <p className="text-gray-600 text-center mb-12">
      Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi <br /> aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-[80%] m-auto"> 
      <Best
      restaurantTitle="Bern's Steak House "
      restaurantDescription = "Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet."
      imageSrc = "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg"
      ></Best>


<Best
      restaurantTitle="Eewak Korean Restaurant"
      restaurantDescription = "Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui."
      imageSrc = "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg"
      ></Best>


<Best
      restaurantTitle=" The Ramban Vegan House"
      restaurantDescription = "Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo."
      imageSrc = "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg"
      ></Best>



<Best
      restaurantTitle="Maniest Bake & Cake"
      restaurantDescription = "Diam lacus nunc est commodo nunc, velit et amet eu vitae sem."
      imageSrc = "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg"
      ></Best>


<Best
      restaurantTitle="Crush Los Angeles"
      restaurantDescription = "Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique."
      imageSrc = "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg"
      ></Best>


<Best
      restaurantTitle="The Mike Winery"
      restaurantDescription = "Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis."
      imageSrc = "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg"
      ></Best>
      </div>
      </div>
      <MailingList></MailingList>
      <Videos></Videos>
      <Invite></Invite>
      <Footer></Footer>
    </>
  );
}

export default App;
