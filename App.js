import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const dataList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1006135",
          name: "Millet Express",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/5/b9e3f92d-a22a-4e5d-8c4b-5d7555fb80d8_1e322b26-602c-4a21-aa39-e20980eb6529_compressed",
          locality: "Vuda Layout",
          areaName: "N A D",
          costForTwo: "₹200 for two",
          cuisines: ["Healthy Food", "South Indian"],
          avgRating: 4.3,
          parentId: "10639",
          avgRatingString: "4.3",
          totalRatingsString: "543",
          promoted: true,
          adTrackingId:
            "cid=1f99bc2e-01c7-416e-859a-dabc0163ec7a~p=1~adgrpid=1f99bc2e-01c7-416e-859a-dabc0163ec7a#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1006135~plpr=COLLECTION~eid=f98b5168-ea6e-482a-8f74-e68abae54ed6~srvts=1766077036207~collid=83639",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-18 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "High%20Protein/rx%20tag%205.png",
                description: "High Protein",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "High%20Protein/rx%20tag%205.png",
                      description: "High Protein",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "1f99bc2e-01c7-416e-859a-dabc0163ec7a",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1006135&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "66443",
          name: "Eaters Stop",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/10/ea0b91b8-6550-4569-b232-c6a6e9c85236_542a7736-3410-424f-8b0b-58a935629428.png",
          locality: "Nad Road",
          areaName: "Kakani Nagar",
          costForTwo: "₹300 for two",
          cuisines: [
            "Biryani",
            "Chinese",
            "South Indian",
            "Tandoor",
            "Lebanese",
          ],
          avgRating: 4.5,
          parentId: "12347",
          avgRatingString: "4.5",
          totalRatingsString: "113K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-18 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=66443&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1022643",
          name: "Big Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/8/092a28c4-a492-4699-8442-3da34c8ea8e2_1022643.jpg",
          locality: "Chitralaya Road",
          areaName: "Jagdamba",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Tibetan", "Desserts"],
          avgRating: 4.1,
          parentId: "434792",
          avgRatingString: "4.1",
          totalRatingsString: "1.0K+",
          promoted: true,
          adTrackingId:
            "cid=0042a4ba-4ee2-4dd4-b202-4094b1e91b3c~p=2~adgrpid=0042a4ba-4ee2-4dd4-b202-4094b1e91b3c#ag23~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1022643~plpr=COLLECTION~eid=2e4c0443-351f-4379-941c-d063b564c65a~srvts=1766077036207~collid=83639",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 9.7,
            serviceability: "SERVICEABLE",
            slaString: "30-40 mins",
            lastMileTravelString: "9.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-18 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹129",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "0042a4ba-4ee2-4dd4-b202-4094b1e91b3c",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1022643&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "589828",
          name: "Paradise Biryani",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/c761073b-02c4-44f8-aae6-c62703ec0607_589828.jpg",
          locality: "Butchirajpalem Village",
          areaName: "Nad Junction",
          costForTwo: "₹400 for two",
          cuisines: ["Biryani", "Kebabs", "North Indian", "Hyderabadi"],
          avgRating: 4.2,
          parentId: "700",
          avgRatingString: "4.2",
          totalRatingsString: "6.4K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 1.9,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-18 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/big_rx.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹39",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=589828&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "67848",
          name: "Satyam Restaurant",
          cloudinaryImageId: "73e07d77b8d136c2f129988c1058808f",
          locality: "Dwarka Nagar",
          areaName: "Dwaraka Nagar",
          costForTwo: "₹250 for two",
          cuisines: ["Biryani", "Chinese", "Tandoor", "Beverages"],
          avgRating: 4.4,
          parentId: "178966",
          avgRatingString: "4.4",
          totalRatingsString: "38K+",
          promoted: true,
          adTrackingId:
            "cid=bc7827a1-2d28-4ab6-ac89-0a9ef66a64fa~p=6~adgrpid=bc7827a1-2d28-4ab6-ac89-0a9ef66a64fa#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=67848~plpr=COLLECTION~eid=162d904f-1a94-4ece-88e8-862ec6f5ac4c~srvts=1766077036207~collid=83639",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 9.3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "9.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-18 22:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.8",
              ratingCount: "4.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "bc7827a1-2d28-4ab6-ac89-0a9ef66a64fa",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=67848&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "237338",
          name: "Behrouz Biryani",
          cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
          locality: "laxmi nagar",
          areaName: "Simhachalam",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.1,
          parentId: "1803",
          avgRatingString: "4.1",
          totalRatingsString: "3.1K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-18 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=237338&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1031195",
          name: "Rowdy Reddy Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/5/15/34d295b8-bbdb-45a7-b7ea-dba990814f18_e391c8f9-e7c2-4337-9aa9-d27f3b9bf934.jpeg",
          locality: "laxmi nagar",
          areaName: "Simhachalam",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Desserts",
            "Beverages",
          ],
          avgRating: 3.7,
          parentId: "582807",
          avgRatingString: "3.7",
          totalRatingsString: "115",
          promoted: true,
          adTrackingId:
            "cid=00ae3577-9251-4d16-ac8b-2a9372a174ed~p=7~adgrpid=00ae3577-9251-4d16-ac8b-2a9372a174ed#ag26~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1031195~plpr=COLLECTION~eid=31321cd4-d5e5-4d90-9621-406782142a92~srvts=1766077036207~collid=83639",
          sla: {
            deliveryTime: 17,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-18 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "00ae3577-9251-4d16-ac8b-2a9372a174ed",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1031195&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo-image"
          src="https://s.tmimgcdn.com/scr/800x500/520000/unique-food-delivery-logo-design-template_520047-original.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
      {/* <div className="card-container">
         <RestroCard data={dataList[0]} />
         <RestroCard data={dataList[1]} />
         <RestroCard data={dataList[2]} />
         <RestroCard data={dataList[3]} />
         <RestroCard data={dataList[4]} />
         <RestroCard data={dataList[5]} />
         <RestroCard data={dataList[6]} />
      </div> */}

      {/* optimizing/cleaning the code....... */}

      <div className="card-container">
        {dataList.map((restaurant) => (
          <RestroCard key={restaurant.card.card.info.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

const RestroCard = (props) => {
  //   const { img, name, rating, cuisines, location } = props;
  const { data } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    data?.card.card.info;
  return (
    //  <div className="restro-card">
    //   <img
    //     src={
    //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    //       data.card.card.info.cloudinaryImageId
    //     }
    //   />
    //   <h3>{data.card.card.info.name}</h3>
    //   <h4>{data.card.card.info.avgRating}</h4>
    //   <p>{data.card.card.info.cuisines.join(", ")}</p>
    //   <p>{data.card.card.info.areaName}</p>
    // </div>

    // optimizing/cleaning the code.......

    <div className="restro-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
