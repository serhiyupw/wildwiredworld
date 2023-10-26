<template>
  <div class="background-video">
    <video autoplay muted loop playsinline class="video">
      <source src="homee.mp4" type="video/mp4">
    </video>
    <!-- <video autoplay muted loop playsinline controlslist="" class="video" crossorigin="use-credentials" data-testid="video-js" id="vjs_video_3_html5_api" tabindex="-1" preload="auto" src="blob:https://www.dropbox.com/43b233c4-8105-4b31-809c-1067822c40c7" poster="https://previews.dropbox.com/p/thumb/ACGwGErjCnWchiNXQrBksipDNn_7lDUlGfI2eEbPCDSRpJOzY9IwlJSkHzCOCIioHwtET1DuE4aJcp7RK2lMV3rEA9YWvWgOZrMD-UX88110PEuMFvq5-J1Z7kFSICcOV-FuLn6Ed_f1wiJe6tQfwhbycprRZCU7X5hNzv2z7J6lNX80FV6E0lEFMlGTx7Mw1o4rscB-juyft9TQMjA2428NyOxUzhT_UtQlvPk5CGbYTZY2KqRBqsgIcMOK3pDUKPlIqBY7_HfX7J4iNmnP_efO/p.jpeg?size=1280x960&amp;size_mode=2&amp;psid=bcd629c5-100f-4e6b-97c4-599e08b7f8c0"><source src="https://previews.dropbox.com/p/hls_master_playlist/ACEf9qw8OGA_8a5Wjt_X6iRO4ETc2-_HFlwf6fSHnbue6O7Nr-0tS9lt5VLLTQu8NQ3KkUkj_6avpqRNCiHIoGaop08aJiAEaLX56ki-2a8JUiVvy4Hiv4ygufKBwZpAQoA6JboY9Qa3YLULPj9hLvvw1OwMwlaScf-stK24evKb5SMmtHS4HEy57juFRrWss1F9HTQ7y2Y6aM0Mov32Pulnpu_8bm3er6L0m7vcwMgTjQ3_Z64XVCY7z-e98H4NgTjtC3CpCUJwT3WXTyDp5d9ZUJDhiYOurDUj0fjhkEuRGQ/p.m3u8" type="application/vnd.apple.mpegurl"></video> -->
  </div>
</template>



<style scoped>
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Place it below other content */
  overflow: hidden; /* Ensure the video remains within the viewport */
}

.video {
  object-fit: cover; /* Cover the entire container */
  width: 100%;
  height: 100%;
  filter: brightness(50%);
}
</style>
