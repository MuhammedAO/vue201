<template>
  <div class="flex justify-center">
    <div
      class="w-1/2 bg-blue-900 rounded-lg shadow px-6 py-12 flex flex-col items-center"
    >
      <div class="bg-gray-400 rounded-full flex justify-around p-1">
        <button
          class="rounded-full text-xs font-bold px-6 py-1 uppercase focus:outline-none"
          :class="
            currentFrequency == frequency ? 'bg-blue-600 text-gray-200' : ''
          "
          @click="currentFrequency = frequency"
          v-for="(name, frequency, index) in plans[0].pricing"
          :key="index"
        >
          {{ frequency }}
        </button>
      </div>
      <div class="flex w-full pt-8">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="text-white w-1/2"
        >
          <h1 class="text-2xl font-bold">{{ plan.name }}</h1>
          <ul class="pt-4">
            <li
              v-for="(benefit, index) in plan.benefits[currentFrequency]"
              :key="index"
            >
              {{ benefit }}
            </li>
            <!-- <li>Benefit 2</li>
            <li>Benefit 3</li>
            <li>Benefit 4</li> -->
          </ul>
          <div class="flex justify-center pt-8">
            <div class="text-3xl font-bold">
              {{ getPrice(plan.pricing[currentFrequency].price) }}
            </div>
            <div class="pl-1 pt-2 text-gray-300">
              {{ plan.pricing[currentFrequency].label }}
            </div>
          </div>
        </div>
        <!-- 
        <div class="text-white w-1/2">
          <h1 class="text-2xl font-bold">Pro</h1>
          <ul class="pt-4">
            <li>Benefit 1</li>
            <li>Benefit 2</li>
            <li>Benefit 3</li>
            <li>Benefit 4</li>
          </ul>
          <div class="flex justify-center pt-8">
            <div class="text-3xl font-bold">&#x20a6;799</div>
            <div class="pl-1 pt-2 text-gray-300">/mo</div>
          </div>
        </div> -->
      </div>
      <div class="pt-4 text-gray-400 text-sm text-center font-bold">
        <a href="#" @click.prevent="currency = 'ngn'">NGN</a> |
        <a href="#" @click.prevent="currency = 'usd'">USD</a> |
        <a href="#" @click.prevent="currency = 'eur'">EUR</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getPrice(price) {
      return this["currency" + this.currency.toUpperCase()](price);
    },
    currencyNGN(price) {
      return "₦" + price;
    },
    currencyUSD(price) {
      return "$" + Math.ceil(price * 0.0028);
    },
    currencyEUR(price) {
      return "€" + Math.ceil(price * 0.0025);
    }
  },
  data: function() {
    return {
      currentFrequency: "monthly",
      currency: "ngn",
      plans: [
        {
          name: "Starter",
          benefits: {
            monthly: ["Benefit 1", "Benefit 2", "Benefit 3"],
            yearly: ["Benefit 1", "Benefit 2", "Benefit 3", "benefit 4"],
            lifetime: [
              "Benefit 1",
              "Benefit 2",
              "Benefit 3",
              "benefit 4",
              "benefit 5"
            ]
          },
          pricing: {
            monthly: { price: 499, label: "/mo" },
            yearly: { price: 799, label: "/yr" },
            lifetime: { price: 2500, label: "" }
          }
        },
        {
          name: "Pro",
          benefits: {
            monthly: ["Benefit 1", "Benefit 2", "Benefit 3"],
            yearly: ["Benefit 1", "Benefit 2", "Benefit 3", "benefit 4"],
            lifetime: [
              "Benefit 1",
              "Benefit 2",
              "Benefit 3",
              "benefit 4",
              "benefit 5"
            ]
          },
          pricing: {
            monthly: { price: 399, label: "/mo" },
            yearly: { price: 999, label: "/yr" },
            lifetime: { price: 2999, label: "" }
          }
        },
        {
          name: "All Star",
          benefits: {
            monthly: ["Benefit 1", "Benefit 2", "Benefit 3"],
            yearly: ["Benefit 1", "Benefit 2", "Benefit 3", "benefit 4"],
            lifetime: [
              "Benefit 1",
              "Benefit 2",
              "Benefit 3",
              "benefit 4",
              "benefit 5"
            ]
          },
          pricing: {
            monthly: { price: 899, label: "/mo" },
            yearly: { price: 1200, label: "/yr" },
            lifetime: { price: 5999, label: "" }
          }
        }
      ]
    };
  }
};
</script>

<style scoped></style>
