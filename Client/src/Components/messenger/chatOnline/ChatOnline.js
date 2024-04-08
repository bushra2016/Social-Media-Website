import "./chatOnline.css"


const ChatOnline = () => {
    return (
        <div className ="chatOnline">
            <div className ="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                   <img className="chatOnlineImg" src="/images/medieval-276019_1280.jpg" alt =""/>
                   <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Luna Dou</span>
             
            </div>
            
            <div className ="chatOnlineFriend">
               <div className="chatOnlineImgContainer">
                  <img className="chatOnlineImg" src="/images/medieval-276019_1280.jpg" alt =""/>
                  <div className="chatOnlineBadge"></div>
               </div>
              <span className="chatOnlineName">Luna Dou</span>
            </div>

            <div className ="chatOnlineFriend">
               <div className="chatOnlineImgContainer">
                  <img className="chatOnlineImg" src="/images/medieval-276019_1280.jpg" alt =""/>
                  <div className="chatOnlineBadge"></div>
              </div>
             <span className="chatOnlineName">Luna Dou</span>
            </div>
        </div>
    );
}

export default ChatOnline;
