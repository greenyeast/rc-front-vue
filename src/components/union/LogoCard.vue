<!-- LogoCard.vue -->

<template>
  <div class="logo-card">
    <img :src="cardSrc" :alt="rcName + ' card-logo'">
    <span class="rc-name">{{ rcName }}</span>
    <div class="num-waiting-teams">
      <span class="num-waiting">{{ numWaiting }}</span>
      <span class="team-text"> teams</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardSrc: String,
    rcName: String,
    numWaiting: Number,
  },
};
</script>

<style scoped>
.logo-card {
  width: 140px;
  height: 299.2px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}

.logo-card img {
  width: 90px;
  height: 171.2px;
}

.rc-name {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  gap: 8px;
}

.num-waiting-teams {
  height: 36px;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0em;
}

.num-waiting {
  font-weight: 700;
}

.team-text {
  font-weight: 400;
}
</style>
