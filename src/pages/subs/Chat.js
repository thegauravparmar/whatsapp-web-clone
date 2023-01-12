import React from "react";
import { connect } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// This function is used to render the chat bubble
function Chat(props) {
  // destructure the props and store in the variables
  const { meta, user } = props;
  const { uid, text, media, tstamp, rid } = meta;

  // filter out the user with chatStatus true
  const data = user.filter((item) => item.chatStatus === true)[0];
  // create the retriveMedia function to show the media
  const retriveMedia = () => {
    // check if the media is present
    if (media) {
      // destructure the media object
      const { type, src, poster } = media;
      return (
        <div className={`media rel ${type} `}>
          {
            // check if the media type is image and show the image
            type == "image" && (uid == data.id || uid == 0) && (
              <div
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="image-div"
              />
            )
          }
          {
            // check if the media type is video and show the video
            type == "video" && (uid == data.id || uid == 0) && (
              <>
                <div
                  style={{
                    backgroundImage: `url(${poster})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="rel insertblur video-div"
                />
                <button className="play-button abs abc fs24">
                  <PlayArrowIcon />
                </button>
              </>
            )
          }
          {
            // check if the media type is audio and show the play button
            type == "audio" && (uid == data.id || uid == 0) && (
              <div className="audioplayer rel flex align">
                <button className="audio-button  fs18">
                  <PlayArrowIcon />
                </button>
                <div className="controls flex col ">
                  <div className="slider rel">
                    <div className="knob abs aby" />
                  </div>
                  <div className="flex align">
                    <h2 className="fs12 myfontcolor">1:15</h2>
                  </div>
                </div>
                <div className="udp">
                  <img src={data.dp} />
                </div>
              </div>
            )
          }
        </div>
      );
    }
    // return null if media is not present
    return null;
  };

  // return the chat bubble
  return (
    <div id="mychat">
      {(uid == data.id || (uid == 0 && rid == data.id)) && (
        <div className={`bubble rel ${uid === 0 ? "mine" : ""}  `}>
          <div className={`ballon rel  ${media ? "rmp" : ""} `}>
            {
              // show the tail based on the uid
              uid === 0 ? (
                <div className="tail-right"></div>
              ) : (
                <div className="tail-left"></div>
              )
            }

            <h2
              className={`name fs13 b ${
                uid === 0 ? "blueclass" : "greenclass"
              } `}
            >
              {
                // show the user name
                uid === 0 ? "You" : data.name
              }
            </h2>
            {
              // call the retriveMedia function
              retriveMedia()
            }
            {
              // show the text
              text != null && <p className="msg-text fs13">{text}</p>
            }
            <h2 className="time-stamp fs11 abs">{tstamp}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

// map the state from store
const mapStateToProps = (state) => {
  return {
    ...state.Chat,
  };
};

// map the dispatch action
const mapDispatchToProps = (dispatch) => {
  return {
    setState: (loaded) =>
      dispatch({ type: "CHAT_STATE", state: { loaded: loaded } }),
  };
};

// export the connect function
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
