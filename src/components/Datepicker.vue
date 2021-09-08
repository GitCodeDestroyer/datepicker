<template>
  <div>
    <p>{{ date }}</p>
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
      monthDays: ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']
    }
  },

  methods: {
    checkYear: (year) => {
      if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) {
        return true
      }
      else {
        return false
      }
    }
  },

  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
