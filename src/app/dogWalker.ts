// 위치 저장
import { supabase } from "./lib/supabaseClient";

async function saveLocation(nickname: string, lat: number, lng: number) {
  const { data, error } = await supabase.from("dog_walker_locations").upsert([
    {
      nickname,
      latitude: lat,
      longitude: lng,
    },
  ]);

  if (error) console.error("위치 저장 실패:", error.message);
}
