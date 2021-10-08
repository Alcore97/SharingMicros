import { useEffect, useState } from 'react';
import * as React from 'react';
import { Observable } from 'windowed-observable';

const observable = new Observable('message');

export const MF1Page: React.FC= () =>{
    const [messages, setMessages] = React.useState([]);
  
    const handleNewMessage = (message) => {
  
      setMessages((currentMessages) => currentMessages.concat(message.data));
    };
  
    React.useEffect(() => {  
      observable.subscribe(handleNewMessage);
  
      return () => {
        observable.unsubscribe(handleNewMessage);
      }
    }, [messages]);
  
  
    return (
      <div className="MF">
        <h3>Microfrontend 1️⃣</h3>
        <p>New messages will be displayed below 👇</p>
        <div className="MF__messages">
          {messages.map((something, i) => <p key={something + i}>{something}</p>)}
        </div>
      </div>
     
    );
      
  }

  

  
