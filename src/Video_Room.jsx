import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
const Video_Room = () => {
  const {id} = useParams();
  const meeting = (element) =>{
    const appID = 1887862403;
      const serverSecret = "3eee45e9b6abf407d679eefe2add57f0";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id,  Date.now().toString(),  "suman");

       // Create instance object from Kit Token.
       const zp = ZegoUIKitPrebuilt.create(kitToken);

       zp.joinRoom({
        container:element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:`http://localhost:5173/${id}`
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
       })
  }
  return (
    <>
      <div ref={meeting}/>
    </>
  )
}

export default Video_Room
