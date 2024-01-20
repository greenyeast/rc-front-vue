<template>
  <div class="info-card">
    <img :src="logoSrc" :alt="collegeName + ' rc-logo'">
    <div class="college-info-container">
      <p class="college-name">{{ collegeName }}</p>
      <p class="college-sub">{{ collegeSub }}</p>
      <div class="info-now">
        <div class="info-box">
          <p>Waiting ({{ waitingCount }})</p>
        </div>
        <div class="info-box">
          <p>Contacting ({{ contactingCount }})</p>
        </div>
        <div class="info-box">
          <p>Completed ({{ completedCount }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logoSrc: String,
    collegeName: String,
    collegeSub: String,
    waitingCount: Number,
    contactingCount: Number,
    completedCount: Number,
  },
};
</script>

<style scoped>
.info-card {
  height: 169px;
  gap: 40px;
  display: flex;
  flex-direction: row;
}

.info-card img {
  width: 100px;
  height: 100px;
}

.college-name {
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  white-space: nowrap;
}

.college-sub {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.college-info-container {
  display: flex;
  flex-direction: column;
}

.info-now {
  height: 45px;
  padding: 4px 0px 4px 0px;
  gap: 6px;
  display: flex;
  flex-direction: row;
  letter-spacing: 0em;
  text-align: center;
  align-items: flex-end;
}

.info-now p {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
}

.info-box {
  height: 20px;
  width: fit-content;
  padding: 2px 4px 2px 4px;
  border-radius: 2px;
  gap: 2px;
  background-color: #f5bc25b2;
}
</style>
