<template>
  <body class="body">
  <div class="container">
  <div class="news">
    Weekly News
  </div>
  <div class="mid_container">
    <hr class="straight">
    <div class="header">
      <p1 class="day">{{ getCurrentDate() }}</p1>
      <div class="dropdown">
      <drop-down
        :options="options"
        v-model="parentSelectedOption"
      />
      <drop-down2
          :options="options2"
          v-model="parentSelectedOption2"
      />
      </div>
      <img class="bell" src="@/assets/icon-bell.png">
    </div>
    <hr class="straight2">
    <hr class="cross">
    <div class="main-container">
      <div class="main-grid">
    <main-section/>
      </div>
    </div>
  </div>
  </div>
  </body>
</template>

<script setup>
import { ref } from "vue";
import DropDown from "@/components/news/DropDown.vue";
import DropDown2 from "@/components/news/DropDown2.vue";
import MainSection from "@/components/news/MainSection.vue";

const options=ref([
  {
    name: '2023-1',
    value: 1,
  },
  {
    name:'2023-2',
    value: 2,
  },
  {
    name:'2024-1',
    value: 3,
  }
])
const options2=ref([
  {
    name: 'Week1',
    value: 1,
  },
  {
    name:'Week2',
    value: 2,
  },
  {
    name:'Week3',
    value: 3,
  },
  {
    name:'Week4',
    value: 4,
  },
  {
    name:'Week5',
    value: 5,
  },
  {
    name:'Week6',
    value: 6,
  },
  {
    name:'Week7',
    value: 7,
  },
  {
    name:'Week8',
    value: 8,
  },
  {
    name:'Week9',
    value: 9,
  },
  {
    name:'Week10',
    value: 10,
  },
  {
    name:'Week11',
    value: 11,
  },
  {
    name:'Week12',
    value: 12,
  },
  {
    name:'Week13',
    value: 13,
  },
  {
    name:'Week14',
    value: 14,
  },
  {
    name:'Week15',
    value: 15,
  },
  {
    name:'Week16',
    value: 16,
  },
])
const parentSelectedOption = ref(null)
const parentSelectedOption2 = ref(null)
</script>
<script>

import mainSection from "@/components/news/MainSection.vue";

export default {
  methods: {
    getCurrentDate() {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const currentDate = new Date();
      return currentDate.toLocaleDateString('en-US', options);
      //toLocaleDateString == Date 객체를 현 지역 날짜 표기법으로 변환된 날짜를 문자열로 반환
    },
    components: mainSection
  },
  name: 'News'
}
</script>

<style scoped>
.main-container{
  margin-top: 80px;
  display: flex;
  justify-content: center;
}
.main-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;
}
img {
  width: 56px;
  height: 61px;
}

.body {
  background-color: #d5ebfa;
}

.bell {
  width: 28px;
  height: 25px;
}

.header {
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.day {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  width: 500px;
  font-weight: 700;

}

.straight {
  background:#175285;
  height: 1px;
  border: 0;
}

.straight2 {
  background:#175285;
  height: 3px;
  border: 0;
}

.cross {
  position: absolute;
  top: 242px;
  left: 50%;
  height: 2500px;
  border: 2px solid #175285;
}

.news {
  font-family: 'Open Sans', sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 20px;
}

.dropdown{
  display: flex;
  margin-left: 55%;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  position: absolute;
}

@media screen and (max-width: 768px) {

  .container {
    height: auto;
  }

  .dropdown {
    margin-left: 0; /* Center dropdowns for smaller screens */
    justify-content: center;
    flex-wrap: wrap; /* Allow items to wrap */
  }

  .header {
    flex-direction: column; /* Stack header items vertically */
    align-items: center;
  }
}
</style>