<template>
  <div>
    <div v-for="iteration in 4" :key="iteration">
      <div class="cards-container">
        <div v-for="(item, index) in state.items" :key="index" class="card">
          <span class="img1" :style="{backgroundImage: `url(${item.imgPath})`}"/>
          <div class="part1">
            <p class="date">2023-11-01</p>
            <div class="likes">
              <p class="heart-number">{{ item.likeCount }}</p>
              <button type="button" class="heart-button" @click="toggleLike(item)">
                <img src="@/assets/icon-heart.png" class="heart-button2"/>
              </button>
            </div>
          </div>
          <div class="card-part2">
            <p class="subtitle">{{ item.subtitle }}</p>
            <p class="union-rc">{{ item.unionRc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Card",
  setup() {
    const state = reactive({
      items: [
        { imgPath: '/img/claude-monet-81513_1280.jpg', likeCount: 0, subtitle: '새로운 외국인 친구 만들기', unionRc: 'Carmichael with Torrey' },
        { imgPath: '/img/monet-1455482_1280.jpg', likeCount: 0, subtitle: '컴퓨터 게임하다 손가락 부러진 팀', unionRc: 'Carmichael with Kuyper' },
        { imgPath: '/img/painting-284546_1280.jpg', likeCount: 0, subtitle: '비가 내려도 우리를 막진 못해', unionRc: 'Philadelphos with Sonyangwon' },
      ],
    });

    const toggleLike = (item) => {
      if (item.isLiked) {
        item.likeCount--;
      } else {
        item.likeCount++;
      }
      item.isLiked = !item.isLiked;
    };

    return { state, toggleLike };
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  gap: 46.94px;
  padding: 16px;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
}

.card {
  background-color: #DBE9F4;
  border: none;
  width: 320px;
  height: 341px;
  position: relative;

}

.img1 {
  width: 320px;
  height: 240px;
  background-size: cover;
  background-position: center;
  border-radius: 3px;
}

.date {
  width: 85px;
  height: 24px;
  top: 2px;
  color: #F5BC25;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
}

.part1 {
  width: 95.3%;
  height: 27px;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 9px;
  left: 9px;
}

.likes {
  width: 50px;
  height: 27px;
  left:83.6%;
  display: flex;
  align-items: center;
}

.heart-number {
  width: 23px;
  height: 27px;
  font-family: Open Sans;
  font-size: 16.8px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: -0.10999999940395355px;
  text-align: center;
  margin: 0;
}

.heart-button {
  background-color: #DBE9F4;
  border: none;
  width: 27px;
  height: 27px;
  cursor: pointer;
}

.heart-button2 {
  width: 27px;
  height: 27px;
  margin-left: -3px;
}

.heart-number,
.heart-button,
.heart-button2 {
  display: inline-block;
}

.card-part2 {
  width: 100%;
  height: 57px;
}

.subtitle {
  width: 240px;
  height: 30px;
  position: relative;
  top: 6px;
  left: 5px;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 700;
  line-height: 45.96px;
  letter-spacing: 0em;
  text-align: left;
}

.union-rc {
  width: 100%;
  height: 27px;
  position: relative;
  left: 5px;
  font-size: 17px;
  font-weight: lighter;
  line-height: 20px;
  letter-spacing: -0.10999999940395355px;
  text-align: left;
  color: #9A9A9A;
}
@media only screen and (max-width: 767px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
    margin-bottom: 20px;
  }

  .img1 {
    height: 180px;
  }

  .date {
    font-size: 14px;
  }

  .likes {
    display: flex;
    align-items: center;
  }

  .heart-number {
    font-size: 14px;
    margin-left: -350%;
  }

  .heart-button {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }

  .subtitle {
    font-size: 14px;
  }

  .union-rc {
    font-size: 14px; /* Adjust the union-rc font size for smaller screens */
  }

}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .cards-container {
    gap: 20px;
  }

  .card {
    width: calc(50% - 10px);
  }
}
</style>


