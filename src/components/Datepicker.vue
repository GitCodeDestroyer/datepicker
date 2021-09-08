<template>
  <div>
    <input type="text" v-model="dateOutput">
    <div class="container visible">
      <div class="switch-panel">
        <button class="arrows arrow-left" @click="prevMonth()">&lt;</button>
        <button class="arrows arrow-right" @click="nextMonth()">&gt;</button>
        <span>{{ dateNow.toLocaleString('default', { month: 'long' }) }} {{ yearNow }}</span>
      </div>
      <div class="weeks-panel">
        <div class="thumb">Sun</div>
        <div class="thumb">Mon</div>
        <div class="thumb">Tue</div>
        <div class="thumb">Wed</div>
        <div class="thumb">Thu</div>
        <div class="thumb">Fri</div>
        <div class="thumb">Sat</div>
        <div class="clearfix"></div>
      </div>
      <div class="date-panel">
        <button class="thumb empty" disabled v-for="j in weekDayOfFirstDay" :key="'w' + j"></button>
        <button class="thumb" v-for="i in daysInThisMonth" :key="i" :class="{ active: i === dayNow }" @click="setDay(i)">
          {{ i }}
        </button>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Datepicker',
  props: {
    date: String
  },
  data() {
    return {
      dateOutput: null,
      daysOfMonths: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      dateNow: this.parseDate(this.date)
    }
  },

  computed: {
    monthNow() {
      return this.dateNow.getMonth() + 1
    },

    yearNow() {
      return this.dateNow.getFullYear()
    },

    weekDayOfFirstDay() {
      return new Date(this.dateNow.getFullYear(), this.dateNow.getMonth(), 1).getDay()
    },

    dayNow() {
      return this.dateNow.getDate()
    },

    daysInThisMonth() {
      if (!this.checkYear(this.dateNow.getFullYear()) && this.monthNow - 1 === 1) {
        return 29
      }
      return this.daysOfMonths[this.monthNow - 1]
    }
  },

  methods: {
    parseDate(date) {
      return new Date(date)
    },

    checkYear: (year) => {
      return year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)
    },

    setDay(date) {
      this.dateNow = new Date(this.dateNow.setDate(date))
      this.dateOutput = (this.dateNow.getUTCFullYear()) + "-" + (this.dateNow.getMonth() + 1)+ "-" + (this.dateNow.getUTCDate())
    },

    // Must work setter for reacting
    prevMonth() {
      this.dateNow = new Date(this.dateNow.setMonth(this.dateNow.getMonth() - 1))
    },

    // Must work setter for reacting
    nextMonth() {
      this.dateNow = new Date(this.dateNow.setMonth(this.dateNow.getMonth() + 1))
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input {
    margin: 25px 0;
    padding: 10px;
    width: 200px;
    border: 1px solid #CCC;
  }

  .container {
    display: none;

    margin: 0 calc(50% - 140px);
    width: 280px;
    border: 1px solid #CCC;
  }

  .container.visible {
    display: block;
  }

  .switch-panel {
    padding: 10px;
    position: relative;
    margin-bottom: 5px;
  }

  .switch-panel .arrows {
    position: absolute;
    height: 40px;
    width: 40px;
    border: none;
    top: 0px;
    background: none;
    cursor: pointer
  }

  .switch-panel .arrows:hover,
  .date-panel .thumb:not(.empty):hover,
  .thumb.active {
    background: #EFEFEF;
  }

  .weeks-panel .thumb {
    cursor: default;
    line-height: 40px;
    text-align: center;
  }

  .switch-panel .arrow-left {
    left: 0;
  }

  .switch-panel .arrow-right {
    right: 0;
  }

  .thumb {
    height: 40px;
    width: 40px;
    float: left;
    cursor: pointer;
    border: none;
    background: none;
  }

  .thumb.empty {
    cursor: default;
  }

  .clearfix {
    clear: both;
  }
</style>
