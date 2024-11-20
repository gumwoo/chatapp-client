import React, { useEffect, useRef } from "react";
import "./MessageContainer.css";
import { Container } from "@mui/system";

const MessageContainer = ({ messageList, user }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <div style={{ overflowY: 'auto', height: 'calc(100vh - 50px)' }}>
      {messageList.map((message, index) => {
        return (
          <Container key={message._id} className="message-container">
            {message.user.name === "system" ? (
              <div className="system-message-container">
                <p className="system-message">{message.chat}</p>
              </div>
            ) : message.user.name === user?.name ? (
              <div className="my-message-container">
                <div className="message-content">
                  <div className="message-username">{message.user.name}</div>
                  <div className="my-message">{message.chat}</div>
                </div>
                <img
                  src="/profile.jpeg"
                  className="profile-image"
                  style={{
                    visibility: index === 0 || 
                      messageList[index - 1].user.name !== message.user.name ? 
                      'visible' : 'hidden'
                  }}
                />
              </div>
            ) : (
              <div className="your-message-container">
                <img
                  src="/profile.jpeg"
                  className="profile-image"
                  style={{
                    visibility: index === 0 || 
                      messageList[index - 1].user.name !== message.user.name ? 
                      'visible' : 'hidden'
                  }}
                />
                <div>
                  <div className="message-username"
                    style={{
                      display: index === 0 || 
                        messageList[index - 1].user.name !== message.user.name ? 
                        'block' : 'none'
                    }}
                  >
                    {message.user.name}
                  </div>
                  <div className="your-message">{message.chat}</div>
                </div>
              </div>
            )}
          </Container>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageContainer;
