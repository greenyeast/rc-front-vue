<template>
  <div class="dropdown-wrapper" ref="dropDown">
    <div class="dropdown-selected-option" @click="toggleDropDown">
      {{ mappedSelectedOption }}
      <img class="icon-drop" src="@/assets/icon-drop.png">
    </div>
    <transition name="slide-fade">
    <div class="options-wrapper"
         v-if="isDropDownVisible"
    >
      <div
          class="option"
          v-for="(option, index) in props.options"
          :key="index"
          @click="toggleOptionSelect(option)"
      >
        {{ option.name || option}}
      </div>
    </div>
    </transition>
  </div>

</template>
<script setup>
import {computed, defineProps,defineEmits, ref, onMounted, onBeforeUnmount} from 'vue'

const dropDown = ref(null)

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const selectedOption = ref(null)

const isDropDownVisible = ref(false)

const mappedSelectedOption = computed(() => {
  return (selectedOption.value?.name || selectedOption.value) ||
      'Week'
})
const toggleDropDown = () => {
  isDropDownVisible.value = !isDropDownVisible.value;
};
const toggleOptionSelect = (option) => {
  selectedOption.value = option;
  emit('update:modelValue',option)
  setTimeout(() => {
    isDropDownVisible.value = false
  }, 300)
}

const closeDropDown = (element) => {
  if(!dropDown.value.contains(element.target)) {
      isDropDownVisible.value = false
    }
}
onMounted(()=>{
  window.addEventListener('click', closeDropDown)
})
onBeforeUnmount(()=>{
  window.removeEventListener('click', closeDropDown)
})
</script>

<style>
.dropdown-wrapper{
  padding: 16px;
  cursor: pointer;
  max-width: 200px;
  margin: 0 auto;
  text-align: center;
}
.dropdown-selected-option {
  display:flex;
  gap: 10px;
}
.options-wrapper {
  position: absolute;
  top: 100%;
  left: 0;
}

.option:hover{
  background: #c5c5c5;
}
.option{
  padding: 16px;
  box-sizing: border-box;

}
.option:last-of-type{
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to{
  transform: translateY(-4px);
  opacity: 0;
}
.icon-drop{
  width: 20px;
  height: 20px;
}
</style>
