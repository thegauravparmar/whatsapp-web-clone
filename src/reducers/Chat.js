const initialState = {
  user: [
    {
      id: 1,
      name: "John Cena",
      status: "Last Seen 5 minutes ago",
      dp: "https://placeimg.com/50/50/people",
      chatStatus: false,
      currentLatest: 1,
    },
    {
      id: 2,
      name: "Roman Reigns",
      status: "Online",
      dp: "https://placeimg.com/50/50/people?v=1",
      chatStatus: false,
      currentLatest: 1,
    },
    {
      id: 3,
      name: "Brock Lessner",
      status: "",
      dp: "https://placeimg.com/50/50/people?v=2",
      chatStatus: false,
      currentLatest: 1,
    },
    {
      id: 4,
      name: "Drew McIntyre",
      status: "Last Seen 20 minutes ago",
      dp: "https://placeimg.com/50/50/people?v=3",
      chatStatus: false,
      currentLatest: 1,
    },
  ],
  messages: [
    {
      id: 1,
      uid: 0,
      rid: 1,
      text: "Lorem ipsum vala sentence",
      media: {
        type: "image",
        src: "https://img.freepik.com/free-photo/sunset-sisters-monument-valley-usa_268835-1009.jpg",
      },
      tstamp: "04:00 PM",
    },
    {
      id: 2,
      uid: 1,
      text: null,
      media: {
        type: "audio",
        src: "https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/mp3/silent-ho-ja-warna-main-violent-ho-jaunga-r-6186.mp3",
      },
      tstamp: "04:01 PM",
    },
    {
      id: 3,
      uid: 1,
      text: null,
      media: {
        type: "video",
        poster:
          "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-top-5-air-purifier-and-oxygen-enriching-plant-pack-16969387507852_600x600.jpg?v=1634230232",
        src: "/video.mp4",
      },
      tstamp: "04:02 PM",
    },
    {
      id: 4,
      uid: 0,
      rid: 1,
      text: "dfssdfsdfdsf",
      media: null,
      tstamp: "04:03 PM",
    },
    {
      id: 5,
      uid: 1,
      text: "fine not fine",
      media: null,
      tstamp: "04:04 PM",
    },
    {
      id: 7,
      uid: 2,
      text: "fine",
      media: null,
      tstamp: "04:05 PM",
    },
    {
      id: 8,
      uid: 3,
      text: "fine",
      media: null,
      tstamp: "04:05 PM",
    },
    {
      id: 9,
      uid: 3,
      text: "fine",
      media: null,
      tstamp: "04:05 PM",
    },
    {
      id: 10,
      uid: 3,
      text: "fine",
      media: null,
      tstamp: "04:05 PM",
    },
    {
      id: 11,
      uid: 4,
      text: "fine",
      media: null,
      tstamp: "04:05 PM",
    },
    {
      id: 12,
      uid: 0,
      rid: 2,
      text: "yash fifine",
      media: null,
      tstamp: "04:05 PM",
    },
    {
      id: 13,
      uid: 0,
      rid: 4,
      text: "fine rummy",
      media: null,
      tstamp: "04:05 PM",
    },
    {
      id: 14,
      uid: 0,
      rid: 3,
      text: "fine dummy",
      media: null,
      tstamp: "04:05 PM",
    },
  ],
  incrementVal: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    //Updating the state of the chat application

    case "CHAT_STATE":
      return { ...action, ...action.state };
    //Adding a message to the chat application
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    //Updating a user's chat status to false
    case "UPDATE_CHAT_STATUS":
      return {
        ...state,
        user: state.user.map((user) =>
          user.id === action.id ? { ...user, chatStatus: false } : user
        ),
      };
    //Updating a user's chat status to true
    case "UPDATE_CHAT_STATUS_POS":
      return {
        ...state,
        user: state.user.map((user) =>
          user.id === action.id ? { ...user, chatStatus: true } : user
        ),
      };
    case "UPDATE_TOP_STATE":
      console.log(action.payload);
      return {
        ...state,
        user: state.user.map((user) =>
          user.id === action.payload.user.id
            ? { ...user, currentLatest: action.payload.user.currentLatest }
            : user
        ),
        incrementVal: action.payload.incrementVal,
      };
    default:
      return state;
  }
}
