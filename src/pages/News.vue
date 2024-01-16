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
    <div class="main">
      <div class="start" v-for="(section, sectionIndex) in sections.slice(0, 3)" :key="sectionIndex">
        <div class="dormname">
          <div class="logoimg">
          <img :src="section.logo" :alt="section.altText">
          </div>
          <div class="name">
          <p1 class="custom-title">{{ section.title }}</p1>
          </div>
        </div>
        <div class="greet">
          <p2 class="greeting">{{ section.greeting }}</p2>
        </div>
        <div id="app">
          <div class="content" v-for="(item, index) in section.items" :key="index">
            <div class="content2">
              <p v-for="(paragraph, pIndex) in item.paragraphs" :key="pIndex" :class="getParagraphClass(pIndex)">{{ paragraph }}</p>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
    <div class="main2">
      <div class="start" v-for="(section, sectionIndex) in sections.slice(3)" :key="sectionIndex">
        <div class="dormname">
          <div class="logoimg">
            <img :src="section.logo" :alt="section.altText">
          </div>
          <div class="name">
            <p1 class="custom-title">{{ section.title }}</p1>
          </div>
        </div>
        <div class="greet">
          <p2 class="greeting">{{ section.greeting }}</p2>
        </div>
        <div id="app">
          <div class="content" v-for="(item, index) in section.items" :key="index">
            <div class="content2">
              <p v-for="(paragraph, pIndex) in item.paragraphs" :key="pIndex" :class="getParagraphClass(pIndex)">{{ paragraph }}</p>
            </div>
          </div>
          <hr>
        </div>
      </div>
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

export default {
  data() {
    return {
      sections: [
        {
          logo: require('@/assets/rc-union.png'),
          altText:"RC Union Logo",
          title: "Student\nDormitory Council",
          greeting: "안녕하세요. 손양원 RC 집행부 Calling 입니다! 손양원RC 학우님들의 2학기를 응원합니다.",
          items: [
            {
              paragraphs: ["1", "새섬모집", "새섬모집이 시작되었습니다! 1차 새섬모집기간은 11월 4일까지입니다! 자세한 공지는 히즈넷을 참고바랍니다:)"]
            },
            {
              paragraphs: ["2", "청결유지", "환경미화원분들의 파업으로 인해 생활관을 각자의 자리에서 조금만 신경써주시면 감사하겠습니다!"]
            },
            {
              paragraphs: ["3", "오픈키친 & 세미나실", "오픈키친과 세미나실 이용수칙을 준수하여 주세요! 지켜지지 않을 시 폐쇄예정이니 모두가 함께쓰는 공간을 깨끗하게 사용하여 주시고, 세미나실 이용시간은 11시까지이니 참고 부탁드립니다!"]
            },
            {
              paragraphs: ["4", "기도제목", "다가오는 중간고사기간에 학우님들에게 지치지않는 힘 주시고 지혜주시길 기도합니다!"]
            }
          ],
        },
        {
          logo: require('@/assets/logo-rc-son.png'),
          altText:"RC Son",
          title: "Bethel Hall\nSONYANGWON",
          greeting: "안녕하세요. 손양원 RC 집행부 Calling 입니다! 손양원RC 학우님들의 2학기를 응원합니다.",
          items: [
            {
              paragraphs: ["1", "새섬모집", "새섬모집이 시작되었습니다! 1차 새섬모집기간은 11월 4일까지입니다! 자세한 공지는 히즈넷을 참고바랍니다:)"]
            },
            {
              paragraphs: ["2", "청결유지", "환경미화원분들의 파업으로 인해 생활관을 각자의 자리에서 조금만 신경써주시면 감사하겠습니다!"]
            },
            {
              paragraphs: ["3", "오픈키친 & 세미나실", "오픈키친과 세미나실 이용수칙을 준수하여 주세요! 지켜지지 않을 시 폐쇄예정이니 모두가 함께쓰는 공간을 깨끗하게 사용하여 주시고, 세미나실 이용시간은 11시까지이니 참고 부탁드립니다!"]
            },
            {
              paragraphs: ["4", "기도제목", "다가오는 중간고사기간에 학우님들에게 지치지않는 힘 주시고 지혜주시길 기도합니다!"]
            }
          ],
        },
        {
          logo: require('@/assets/logo-rc-torrey.png'),
          altText:"RC Vision",
          title: "Vision Hall\nTORREY",
          greeting: "사랑해요 토레이 안녕~\n" +
              "안녕하세요 토레이 집행위원회 올리사랑입니다. 토레이 중간고사 파이팅!",
          items: [
            {
              paragraphs: ["1", "토레이 중간고사 파이팅", "7주차 수요일부터 비전관 1층 로비에 토레이 중간고사 파이팅이 비치될 모두를 위해 조금씩만 가져가 주시기 바랍니다. 중간고사 파이팅!"]
            },
            {
              paragraphs: ["2", "쉼터 및 코이노니아 이용 안내", "쉼터는 오픈채팅방에 공지된 쉴터 예약 시트에서 예약 후 이용하실 수 있습니다.\n" +
              "코이노니아에 시범으로 취식을 허용합니다!\n" +
              "관리가 원활하게 이루어지지 않을 경우 원래대로 취식을 금지할 예정입니다."]
            },
            {
              paragraphs: ["3", "플레이토레이!", "플레이(with)토레이!는 토레이 보드게임 대여 사업입니다.)\n" +
              "장소: 1층 야간 행정실\n" +
              "시간: 토레이 오피스아워(22:30~23:15)"]
            },
            {
              paragraphs: ["4", "아침 prs", "토레이 아침 prS가 매주 수요일에 진행됩니다! 참여하시는 분들께는 아침을 제공하니 많은 참여 부탁드립니다.\n" +
              "*오픈채팅방에서 매주 참여 조사를 진행합니다."]
            }
          ],
        },
        {
          logo: require('@/assets/logo-rc-phila.png'),
          altText:"RC Rodem",
          title: "Rodem Hall\n" +
              "PHILADELPHOS",
          greeting: "안녕하세요 열송학사 집행위원회 ‘’이루심' 입니다!",
          items: [
            {
              paragraphs: ["1", "열송 파이팅", "열송학사 중간고사 파이팅을 준비했습니다! 7주차 수요일 13:30분부터 로뎀관 로비에서 선착순으로 과일컵을 배부해드리니 비타민 충전하고가세요!"]
            },
            {
              paragraphs: ["2", "한양나들이", "10주차 토요일 (10/28) 한복입고 경주 양동마을 나들이가요~!\n" +
              "신청기한은 1주차 수요일(11일)까지입니다. 자세한 사항은 층톡방을 통해 확인해주시고, 많은 참여 부탁드립니다!!"]
            },
            {
              paragraphs: ["3", "기타 생활관 수칙", "복도 내 슬리퍼 착용은 금합니다. 적발 시 벌점이 부과될 수 있으니 유의 바랍니다.\n" +
              "냉장고통 밖의 음식물은 불시에 정리하여 폐기될 수 있으니 냉장고통 안으로 넣어주시기 바랍니다.\n" +
              "신발은 상시수거합니다. 수거된 신발은 옥, 금 오피스아워에 미션을 수행하신 후 돌려받으실 수 있습니다."]
            },
            {
              paragraphs: ["4", "오피스 아워", "토요일 제외, 매일 22:30- 23:00"]
            }
          ],
        },
        {
          logo: require('@/assets/logo-rc-jang.png'),
          altText:"RC Jang",
          title: "Grace Hall\n" +
              "JANGKIRYEO",
          greeting: "안녕하세요. 장기려 집행 위원회 열매입니다. 추석은 잘 보내셨나요?",
          items: [
            {
              paragraphs: ["1", "피크닉 세트", "당신의 가을 낭만을 책임질 피크닉세트가 돌아왔습니다! \n" +
              "피크닉세트와 함꼐 소중한 사람과 가을을 만끽해보세요!\n" +
              "사용료: 4000원, 보증금: 6000원\n" +
              "사용을 원하시면 1층 로비 모니터 QR코드를 통해, 피크닉세트 대여 톡방에 들어오셔서 희망하는 날짜를 말씀해 주세요~"]
            },
            {
              paragraphs: ["2", "시나브로 참가자 모집", "장기려만의 축제, 시나브로가 돌아왔다! 보컬, 악기, 개인기 등 여러분의 빛나는 달란트를 선보일 단 한번의 기회이니 많은 참여 부탁드립니다.\n"+
                "일시 / 장소: 2023.11.6 (11주차 화) / 헤브론홀\n" +
                "모집 대상: 장기려 학우님들 (개인, 팀으로 모두 참여가능)\n"+
                "모집기간: 9/27 ~ 10/11"]
            },
            {
              paragraphs: ["3", "장기려PRS", "매주 수요일 아침 8시에 아름드리에서 장기려PRS가 진행됩니다!\n" +
              "밥버거와 토스트를 드시며 함꼐 말씀 읽어요 ~\n" +
              "PRS참여 희망자는 층톡방에 올라간 PRS 톡방에 입장하셔서 투표를 하셔야 아침식사가 제공됩니다."]
            },
            {
              paragraphs: ["4", "신발수거 안내", "은혜관은 24시간 상시 신발수거가 진행됩니다. 현관에 놓인 신발을 신발장에 넣는 습관을 들여주세요!\n" +
              "월요일 오전부터 실시되니 신발이 수거되지 않도록 유의해주세요.\n" +
              "신발은 한 짝만 수거됩니다."]
            },
            {
              paragraphs: ["5", "기도제목","시험이 다가오는 7주차 입니다. 장기려 학우님들 포기하시지 않는 2학기가 되기를 기도합니다."]
            }
          ],
        },
        {
          logo: require('@/assets/logo-rc-kuyper.png'),
          altText:"RC kuyper",
          title: "Hayongjo Hall\n" +
              "KUYPER",
          greeting: "안녕하세요! 제13대 카이퍼 College 집행위원회 a날개입니다. RC의 중심, 카이퍼에 계신 블루미분들 축복합니다!",
          items: [
            {
              paragraphs: ["1", "중파 준비 물품 비치", "나무계단에 중파 준비 물품이 비치되어 있습니다. 박스테이프 및 양면테이프의 경우, 사용 후 제거 시 접착제가 남아 사용이 불가합니다.\n" +
              "중파 준비 물품으로 비치된 절연테이프를 이용해 주시고, 사용 후에는 꼭 제자리에 놓아 주시길 바랍니다."]
            },
            {
              paragraphs: ["2", "카이퍼 PRS", "매주 수요일 아침 8시 30분부터 코이노니아실에서 아침 PRS가 진행됩니다. 맛있는 아침식사와 함께 성경을 읽고 싶은 블루미들은 전체카톡방 수요조사 투표 후 참여 바랍니다."]
            },
            {
              paragraphs: ["3", "성경 이어쓰기", "하용조관 1층 프린터 옆 책상에 배치되어 있는 성경 이어쓰기 책자에 원하는 구절만큼 부담없이 작성하시면 됩니다. 필사량을 기준으로 배달의 만족 1만원권 상품권을 드리니 많은 참여 부탁드립니다!"]
            },
            {
              paragraphs: ["4", "기도제목", "중간고사까지 얼마 남지 않아 마음이 조급해지는 시기입니다.\n" +
              "블루미분들의 걱정, 근심 모두 내려놓고 함께하심을 믿으며 나아가는 한 추가 될 수 있도록 기도합니다."]
            }
          ],
        },
      ],
    };
  },
  methods: {
    getParagraphClass(index) {
      return `paragraph-${index + 1}`;
    },
    getCurrentDate() {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const currentDate = new Date();
      return currentDate.toLocaleDateString('en-US', options);
      //toLocaleDateString == Date 객체를 현 지역 날짜 표기법으로 변환된 날짜를 문자열로 반환
    },
  },
  name: 'News'
}
</script>

<style scoped>
img {
  width: 56px;
  height: 61px;
}
.paragraph-1 {
  font-family: 'Open Sans', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0px;
}

.paragraph-2 {
  font-family: 'Open Sans', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0px;
}

.paragraph-3 {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}

.greet {
  margin-bottom: 10px;
}

.greeting {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}

.custom-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  white-space: pre-line;
}

.name {
  width: 380px;
  height: 72px;
  left: 89px;
  padding-left: 20px;
}

.dormname {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.content {
  width: 485px;
  gap: 4px;
  margin-bottom: 20px;
}
.body {
  background-color: #d5ebfa;
}

.start {
  padding-bottom: 40px;
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
  border: 1px solid rgba(23, 82, 133, 0.5);
}

.straight2 {
  border: solid rgba(23, 82, 133, 1);
  height: 3px;
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

.main,
.main2 {
  padding: 60px;
  border-radius: 8px;
  gap: 30px;
}
.main-container {
  display: flex;
  gap: 50px;
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

  .main,
  .main2 {
    width: auto;
    top: 391px;
    border-radius: 8px;
    gap: 27px;
  }

  .main-container {
    flex-direction: column;
  }


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