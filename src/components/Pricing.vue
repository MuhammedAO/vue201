<template>
  <div class="flex justify-center">
    <div
      class="w-1/2 bg-blue-900 rounded-lg shadow px-6 py-12 flex flex-col items-center"
    >
      <div class="bg-gray-400 rounded-full flex justify-around p-1">
        <button
          class="rounded-full text-xs font-bold px-6 py-1 uppercase focus:outline-none"
          :class="
            currentFrequency == 'monthly' ? 'bg-blue-600 text-gray-200' : ''
          "
          @click="currentFrequency = 'monthly'"
        >
          Monthly
        </button>
        <button
          class="rounded-full text-xs font-bold px-6 py-1 uppercase focus:outline-none"
          :class="
            currentFrequency == 'yearly' ? 'bg-blue-600 text-gray-200' : ''
          "
          @click="currentFrequency = 'yearly'"
        >
          Yearly
        </button>
      </div>
      <div class="flex w-full pt-8">
        <div class="text-white w-1/2">
          <h1 class="text-2xl font-bold">Starter</h1>
          <ul class="pt-4">
            <li>Benefit 1</li>
            <li>Benefit 2</li>
            <li>Benefit 3</li>
            <li>Benefit 4</li>
          </ul>
          <div class="flex justify-center pt-8">
            <div class="text-3xl font-bold">&#x20a6;500</div>
            <div class="pl-1 pt-2 text-gray-300">/mo</div>
          </div>
        </div>

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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentFrequency: "monthly",
      plans: [
        {
          pricing: {
            monthly: { price: 500, label: "/mo" },
            yearly: { price: 799, label: "/yr" }
          }
        },
        {
          pricing: {
            monthly: { price: 600, label: "/mo" },
            yearly: { price: 999, label: "/yr" }
          }
        }
      ]
    };
  }
};
</script>

<style scoped></style>
