<template>
  <body>
    <div class="top">
      <p class="union-title">Union Activity</p>
      <p class="union-sub-title">To make various experiences, suggest team activities first</p>
    </div>
    <hr class="vertical-separator">
    <div class="flex-container">
      <div class="image-container">
        <img src="../assets/photo-stacking-hands.png" alt="Your Image" style="width: 480px; height: 521px;">
      </div>
      <form class="form">
        <p class="form-title">Apply Now</p>
        <p class="form-subtitle">Fill out the form below to apply for union</p>
        <div class="d-flex justify-content-between">
          <div class="form-group">
            <span class="form-head">Leader</span>
              <input type="text" class="form-control" id="floatingLeader" placeholder="Enter the name" v-model="state.form.leader">
          </div>
          <div class="form-group">
            <span class="form-head">Professor</span>
              <input type="text" class="form-control" id="floatingProfessor" placeholder="Enter the name" v-model="state.form.professor">
          </div>
        </div>
        <div class="form-group">
          <span class="form-head">Email</span>
            <input type="text" class="form-control" id="floatingEmail" placeholder="Enter your email address" v-model="state.form.email">
        </div>
        <div class="form-group">
          <span class="form-head">Union Week</span>
          <div class="weeks-row">
              <button
                  v-for="week in 16"
                  :key="week"
                  class="week-button"
                  :class="{ 'selected': state.form.week === week }"
                  type="button"
                  @click="selectWeek(week)"
              >
                {{ week }}
              </button>
            </div>
        </div>
        <div class="form-group">
          <span class="form-head">Preferred RC</span>
          <div class="rc-selection">
            <div class="rc-buttons">
              <button
                  v-for="rc in rcs"
                  :key="rc.id"
                  class="rc-button"
                  :class="{ 'selected': state.form.rc === rc.id }"
                  type="button"
                  @click="selectRC(rc.id)"
              >
                {{ rc.name }}
              </button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <span class="form-head">Location</span>
          <input type="text" class="form-control" id="floatingLocation" placeholder="e.g. NTH 310, Auditorium ..." v-model="state.form.location">
        </div>
        <div class="form-group">
          <span class="form-head">Union Program</span>
          <input type="text" class="form-control" id="floatingProgram" placeholder="Football, Indoor games, Outdoor games ..." v-model="state.form.program">
        </div>
        <div class="button-container">
          <button class="btn btn-lg btn-primary" @click.prevent="submit">Submit</button>
        </div>
      </form>
    </div>
  <div class="waiting-section">
    <div class="waiting">
      <h2>Waiting for You</h2>
      <div class="logo-cards">
        <LogoCard v-for="rc in waitingRcs" :key="rc.id" :cardSrc="rc.cardSrc" :rcName="rc.name" :numWaiting="rc.numWaiting" />
      </div>
    </div>
  </div>
    <div class="info-section">
      <p class="info-title">Get in Touch,<br><br>Right Away</p>
      <div class="info-cards">
        <InfoCard
            v-for="rc in infoCards"
            :key="rc.id"
            :logoSrc="rc.logoSrc"
            :collegeName="rc.collegeName"
            :collegeSub="rc.collegeSub"
            :waitingCount="rc.waitingCount"
            :contactingCount="rc.contactingCount"
            :completedCount="rc.completedCount"
        />
      </div>
    </div>
  </body>
</template>

<script>
import { reactive } from 'vue';
import LogoCard from '../components/union/LogoCard.vue';
import InfoCard from '../components/union/InfoCard.vue';
//import axios from "axios";

export default {
  components: {
    LogoCard,
    InfoCard,
  },
  name: 'Union',
  setup() {
    const state = reactive({
      form: {
        leader: '',
        professor: '',
        email: '',
        week: '',
        rc:'',
        location:'',
        program:''
      }
    });
    const rcs = [
      { id: 1, name: 'Carmichael' },
      { id: 2, name: 'Jangkiryeo' },
      { id: 3, name: 'Kuyper' },
      { id: 4, name: 'Philadelphos' },
      { id: 5, name: 'Sonyangwon' },
      { id: 6, name: 'Torrey' },
    ];
    const selectWeek = (week) => {
      if (state.form.week === week) {
        state.form.week = '';
      } else {
        state.form.week = week;
      }
    };
    const selectRC = (rcId) => {
      if (state.form.rc === rcId) {
        state.form.rc = '';
      } else {
        state.form.rc = rcId;
      }
    };

    const submit = async () => {
      if (!state.form.leader || !state.form.professor || !state.form.email || !state.form.week || !state.form.rc || !state.form.location || !state.form.program) {
        window.alert("Please fill in all required fields before submitting.");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(state.form.email)) {
        window.alert("Please enter a valid email address.");
        return;
      }
      try {
        console.log('Form submitted:', state.form, selectWeek, rcs, selectRC);
        sessionStorage.setItem('formSubmitted', 'true');
        window.alert("Form Submitted!");
      } catch (error) {
        console.error('Form submission error:', error);
        window.alert("An error occurred while submitting the form. Please try again later.");
      }
    }

    const waitingRcs = [
      { id: 1, name: 'Sonyangwon', cardSrc: require('@/assets/logo-card-son.png'), numWaiting: 13 },
      { id: 2, name: 'Jangkiryeo', cardSrc: require('@/assets/logo-card-jang.png'), numWaiting: 12 },
      { id: 3, name: 'Carmichael', cardSrc: require('@/assets/logo-card-carmi.png'), numWaiting: 8 },
      { id: 4, name: 'Torrey', cardSrc: require('@/assets/logo-card-torrey.png'), numWaiting: 11 },
      { id: 5, name: 'Philadelphos', cardSrc: require('@/assets/logo-card-phila.png'), numWaiting: 10 },
      { id: 6, name: 'Kuyper', cardSrc: require('@/assets/logo-card-kuyper.png'), numWaiting: 9 },
    ];
    const infoCards = [
      {
        id: 1,
        logoSrc: require('@/assets/logo-rc-carmi.png'),
        collegeName: 'Carmichael College',
        collegeSub: 'Join us for the welcome party in the common area at 7 PM!',
        waitingCount: 2,
        contactingCount: 1,
        completedCount: 4,
      },
      {
        id: 2,
        logoSrc: require('@/assets/logo-rc-jang.png'),
        collegeName: 'Jangkiryeo College',
        collegeSub: 'We will be screening a classic movie in the movie room. Don\'t miss it!',
        waitingCount: 2,
        contactingCount: 1,
        completedCount: 4,
      },
      {
        id: 3,
        logoSrc: require('@/assets/logo-rc-kuyper.png'),
        collegeName: 'Kuyper College',
        collegeSub: 'Join us for the welcome party in the common area at 7 PM!',
        waitingCount: 2,
        contactingCount: 1,
        completedCount: 4,
      },
      {
        id: 4,
        logoSrc: require('@/assets/logo-rc-phila.png'),
        collegeName: 'Philadelphos College',
        collegeSub: 'We will be screening a classic movie in the movie room. Don\'t miss it!',
        waitingCount: 2,
        contactingCount: 1,
        completedCount: 4,
      },
      {
        id: 5,
        logoSrc: require('@/assets/logo-rc-son.png'),
        collegeName: 'Sonyangwon College',
        collegeSub: 'Join us for the welcome party in the common area at 7 PM!',
        waitingCount: 2,
        contactingCount: 1,
        completedCount: 4,
      },
      {
        id: 6,
        logoSrc: require('@/assets/logo-rc-torrey.png'),
        collegeName: 'Torrey College',
        collegeSub: 'Join us for the welcome party in the common area at 7 PM!',
        waitingCount: 2,
        contactingCount: 1,
        completedCount: 4,
      },
    ];
    return { state, submit, selectWeek, rcs, selectRC, waitingRcs, infoCards };
  },
}
</script>

<style scoped>
body {
  background-color: #DBE9F4;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  overflow-x: hidden;
}
.top {
  align-items: center;
  justify-content: center;
  height: 275px;
  padding: 60px 170px 60px 170px;
  gap: 60px;
  top: 130px;
}
.vertical-separator {
  border-bottom: 1px solid #17528580;
  width: 85%;
  margin: 0 auto;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 898px;
  padding: 0px 200px 0px 200px;
  gap: 80px;
}
.image-container {
  width: 480px;
  height: 546px;
  padding: 20px 0px 20px 0px;
}

.union-title {
  font-size: 64px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  color: #102D47;
}

.union-sub-title {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #89939E;
}
form {
  width: 480px;
  height: 781px;
  gap: 24px;
  display: flex;
  flex-direction: column;
}
.form-title{
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: #102D47;
}
.form-subtitle{
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #102D47;
}
.form-head{
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #102D47;
}
.form-group {
  height: 60px;
  gap: 4px;
  margin-bottom: auto;
}
.weeks-row {
  grid-template-columns: repeat(8, 1fr);
  display: grid;
  justify-content: space-between;
}
.week-button {
  height: 36px;
  width: 40px;
  padding: 8px;
  border-radius: 6px;
  background-color: #102D470D;
  color: #102D47;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  margin-bottom: 3px;
}
.week-button.selected {
  background-color: #F5BC25;
  color: #fff;
}
.rc-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify: space-between;
  grid-gap: 0;
}
.rc-button {
  width: 130px;
  height: 36px;
  padding: 8px;
  border-radius: 6px;
  background-color: #102D470D;
  color: #102D47;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 3px;
}
.rc-button.selected {
  background-color: #F5BC25;
}
.button-container {
  display: flex;
  justify-content: flex-end;
}
button {
  width: 160px;
  height: 48px;
  padding: 12px;
  border-radius: 8px;
  background-color: #F5BC25;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: none;
}
.waiting-section {
  height: 531.91px;
  top: 1303px;
  background-color: #A3C6E3;
  gap: 60px;
  padding: 60px 200px 60px 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.waiting{
  width: 1040px;
  height: 411.91px;
  gap: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.waiting h2 {
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
}
.logo-cards{
  width: 1040px;
  height: 339.91px;
  padding: 20px 0px 20px 0px;
  gap: 40px;
  display: flex;
  letter-spacing: 0em;
  justify-content: space-between;
}
.logo-card img{
  width: 90px;
  height: 171.2px;
}
.info-section{
  height: 1374px;
  top: 1862px;
  gap: 60px;
  padding: 60px 170px 60px 170px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Roboto;
}
.info-title{
  font-size: 40px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
}
.info-cards{
  width: 520px;
  height: 1254px;
  padding: 20px 0px 20px 0px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  letter-spacing: 0em;
  text-align: left;
}
.info-card img{
  width: 100px;
  height: 100px;
}
.info-now p{
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
}
</style>