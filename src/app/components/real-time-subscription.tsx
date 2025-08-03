import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function RealTimeSubscription() {
  useEffect(() => {
    const channel = supabase
      .channel("dog-walker-location-stream")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "dog_walker_locations",
        },
        (payload) => {
          console.log("실시간 위치 감지:", payload.new);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return <div></div>;
}
