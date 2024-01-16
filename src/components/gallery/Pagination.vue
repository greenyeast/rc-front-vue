<template>
<div class="pagination">
<button class="paginationButton" @click="navigatePage(-1)">&#60;</button>
<button
    v-for="pageNumber in visiblePages"
    :key="pageNumber"
    :class="{ paginationButton: true, selected: pageNumber === currentPage }"
    @click="goToPage(pageNumber)"
>
  {{ pageNumber }}
</button>
<button class="paginationButton" @click="navigatePage(1)">&#62;</button>
</div>
</template>

<script>
export default{
  name:"Pagination",
  data() {
    return {
      currentPage: 1,
      totalPages: 10
    };
  },
  computed: {
    visiblePages() {
      const start = Math.max(1, this.currentPage - 1);
      const end = Math.min(start + 2, this.totalPages);

      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
  },
  methods: {
    navigatePage(change) {
      this.currentPage += change;
      if (this.currentPage < 1) {
        this.currentPage = 1;
      } else if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }

      // Recalculate visiblePages directly in the navigatePage method
      this.visiblePages;
    },
    goToPage(page) {
      this.currentPage = page;
    }
  }

}
</script>

<style scoped>
.pagination{
  width:180px;
  height:160px;
  position:relative;
  left: 43%;
  gap:5px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.paginationButton {
  background:#FFFFFF;
  width: 32px;
  height: 32px;
  font-family: Open Sans;
  font-weight:600;
  line-height:17.7px;
  font-size: 13px;
  border-radius: 8px;
  border:1px solid #F1F1F1;
}
.selected {
  background: #2F80ED;
  color: #FFFFFF;
}

@media only screen and (max-width: 960px) {
  .pagination {
    width: 100%;
    position: relative;
    left: 0;
    justify-content: center;
  }

  .paginationButton {
    margin: 0 0px;
  }

}
</style>