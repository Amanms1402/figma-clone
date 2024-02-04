"use client";

import { LiveMap } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";

import Loader from "@/components/Loader";
import { RoomProvider } from "@/liveblocks.config";

const Room = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoomProvider
      id="fig-room"
     
      initialPresence={{ cursor: null, cursorColor: null, editingText: null }}
      
      initialStorage={{
      
        canvasObjects: new LiveMap(),
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}

export default Room;