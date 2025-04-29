export interface Wedding {
  id: number;
  slug: string;
  user_id: number;
  our_journey: string;
  active_until: string;
  wedding_date: string;
  wedding_music: string;
  wedding_theme: string;
  groom_name: string;
  groom_nickname: string;
  groom_photo: string;
  groom_parent: string;
  groom_instagram: string;
  groom_whatsapp: string;
  bride_name: string;
  bride_nickname: string;
  bride_photo: string;
  bride_parent: string;
  bride_instagram: string;
  bride_whatsapp: string;
  photo_highlight_one: string;
  photo_highlight_two: string;
  akad_date: string;
  akad_time: string;
  akad_location_name: string;
  akad_address: string;
  akad_lat: string;
  akad_lng: string;
  reception_date: string;
  reception_time: string;
  reception_location_name: string;
  reception_address: string;
  reception_lat: string;
  reception_lng: string;
  video_youtube_link: string;
  live_streaming_link: string;
  thanks_image: string;
  thanks_message: string;
  created_at: string;
  updated_at: string;
  photos: Photo[];
}

export interface Photo {
  id: number;
  wedding_id: number;
  url: string;
  name: string;
  alt: string | null;
  created_at: string;
  updated_at: string;
}