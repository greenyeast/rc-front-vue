<template>
  <div class="gallery">
    <div class="top">
      <div class="container">
        <h1 class="title">Team Gallery</h1>
        <p class="p1">Share your beautiful memory</p>
      </div>
      <hr class="hr1">
    </div>
    <button class="uploadButton">Upload</button>
    <Card />
    <Pagination/>
  </div>
</template>

<script>
import Card from "@/components/gallery/Card.vue";
import Pagination from "@/components/gallery/Pagination.vue";

export default {
  name: "Gallery",
  components: { Card, Pagination },
};
</script>

<style scoped>
/* URL for fonts 
@import url('https://fonts.google.com/noto/specimen/Noto+Sans+KR?preview.text=Residential%20College&query=noto+sans');*/
/*@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
*/

.gallery {
  background-color: #DBE9F4;
  width: 100%;
  height: 100%;
}

.top {
  width: 100%;
  height: 275px;
  top: 130px;
  padding: 80px 20px;
  gap: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  width: 100%;
  height: 104px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  width: 100%;
  max-width: 520px;
  height: 48px;
  font-family: Open Sans;
  font-weight: 700;
  font-size: 64px;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 10px;
}

.p1 {
  width: 100%;
  max-width: 520px;
  height: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #89939E;
}

.hr1 {
  width: 100%;
  max-width: 1215px;
  border-top: 1px solid #17528550;
}

.uploadButton {
  width: 100%;
  max-width: 160px;
  height: 48px;
  position: relative;
  left: 74.5%;
  padding: 12px;
  border-radius: 8px;
  background: #F5BC25;
  color: #ffffff;
  border: none;
  cursor: pointer;
}

@media only screen and (max-width: 767px) {
  .title {
    font-size: 300%; /* Adjust the font size for smaller screens */
  }
}

@media only screen and (min-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .title {
    margin-bottom: 0;
  }

  .p1 {
    font-size: 16px;
    line-height: 24px;
  }
}
@media only screen and (max-width: 960px) {
  .uploadButton {
    max-width: 160px;
    left:65%;
  }
}

</style>
