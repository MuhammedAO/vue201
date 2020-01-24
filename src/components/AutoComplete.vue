<template>
  <div class="about flex flex-col items-center">
    <div class="absolute inset-0 z-0" @click="modal = false"></div>
    <input
      type="text"
      class="bg-gray-300 px-5 py-2 z-10"
      autocomplete="off"
      v-model="state"
      @input="filterStates"
      @focus="modal = true"
    />
    <div v-if="filteredStates && modal" class="z-10">
      <ul class="w-48 bg-gray-800 mt-2 text-white">
        <li
          v-for="(filteredStates, index) in filteredStates"
          :key="index"
          @click="setState(filteredStates)"
          class="py-2 border-b cursor-pointer"
        >
          {{ filteredStates }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      state: "",
      modal: false,
      states: [
        "Lagos",
        "Abuja",
        "Abakaliki",
        "Kwara",
        "Ilorin",
        "Ogun",
        "Ekiti"
      ],
      filteredStates: []
    };
  },

  mounted() {
    this.filterStates();
  },
  methods: {
    filterStates() {
      if (this.state.length == 0) {
        this.filteredStates = this.states;
      } else {
        this.filteredStates = this.states.filter(state => {
          return state.toLowerCase().startsWith(this.state.toLowerCase());
        });
      }
    },
    setState(state) {
      this.state = state;
      this.modal = false;
    }
  },
  watch: {
    state() {
      this.filterStates();
    }
  }
};
</script>
