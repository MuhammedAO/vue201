<template>
  <div class="mt-6">
    <input
      type="text"
      :placeholder="template"
      class="bg-gray-300 w-56 text-2xl px-2 py-1  focus:outline-none rounded-lg"
      v-model="number"
    />
  </div>
</template>

<script>
export default {
  props: ["template"],
  data: function() {
    return {
      number: "",
      format: "",
      regex: "^"
    };
  },
  mounted() {
    let x = 1;
    this.format = this.template.replace(/X+/g, () => "$" + x++);

    this.template.match(/X+/g).forEach(char => {
      this.regex += "(\\d{" + char.length + "})?";
      // console.log(this.regex);
    });
  },
  watch: {
    number() {
      this.number = this.number
        .replace(/[^0-9]/g, "")
        // .replace(/^(\d{3})?(\d{3})?(\d{4})?/g, this.format)
        .replace(new RegExp(this.regex, "g"), this.format)
        .substr(0, this.template.length);
    }
  }
};
</script>
