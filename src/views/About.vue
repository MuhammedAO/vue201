<template>
  <div class="about">
    <input
      type="text"
      class="bg-gray-300 px-5 py-2"
      autocomplete="off"
      v-model="state"
    />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      state: " "
    };
  }
};
</script>
