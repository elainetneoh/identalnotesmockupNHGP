import React from 'react';


export const Contains = React.createContext({
  div: {
    top:"0",
    bot:"0"
  },
  setdiv: (div:{
    top:string,
    bot:string,
  }) => {}
});
