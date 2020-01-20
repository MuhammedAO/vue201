<template>
  <div>
    <div :class="classBinding">{{ value }}</div>
    <div :class="fontBinding">{{ value }}</div>
    <div :style="{ fontSize: value * 10 + 'px' }">{{ value }}</div>
    <button type="button" @click="value++">+</button>
    <button type="button" @click="value--">-</button>
    <button type="button" @click="value++">Toggle</button>
    <button type="button" @click="value--">Tog</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      value: 1,
      error: false,
      warning: false
    };
  },
  computed: {
    classBinding: function() {
      return {
        "red-error": this.value >= 6,
        "yellow-link": this.value <= 6
      };
    },
    fontBinding: function() {
      return {
        "fnt-inc": this.value > 10
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red-error {
  background: red;
}

.yellow-link {
  background: yellow;
}

.fnt-inc {
  font-size: 30px;
}

button {
  margin-top: 52px;
}
</style>
