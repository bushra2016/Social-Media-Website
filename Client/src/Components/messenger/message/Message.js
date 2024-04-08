import "./message.css";

const Message = ({own}) => {
    return (
        <div className ={own ? "message own" : "Message"}>
            <div className="messageTop">
                <img className="messageImg"  src="/images/medieval-276019_1280.jpg"  alt=""/>
                <p className="messageText">
                    lor kodopedjc eopckedokce dcoekced opckeokcd koccoe
               </p>
            </div> 
            <div className="messageBottom"> 1 hour ago</div> 
            
        </div>
    );
}

export default Message;
