<!-- pages/coming-soon.vue -->
<template>
  <div class="coming-soon">
    <h1>Coming Soon</h1>
    <!-- <p>19/10/23</p> -->
    <div class="countdown pb-3 text-[#777]">
      👽🛸🌠🚀🌟
      <span class="countdown-item">{{ days }} days</span>
      <span class="countdown-item">{{ hours }} hours</span>
      <span class="countdown-item">{{ minutes }} minutes</span>
      <span class="countdown-item">{{ seconds }} seconds</span>
      🌌👽🛸🌠🚀🌟
    </div>
    <!-- <p>🌟🪐🌕🌃👾  We are working hard to bring you wildwiredworld  🌌👽🛸🌠🚀🌟</p> -->
    <!-- Add any additional content here -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetDate: new Date('2023-10-21T00:00:00').getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  methods: {
    updateCountdown() {
      const currentDate = new Date().getTime();
      const timeDifference = this.targetDate - currentDate;

      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Check if the target date has passed
      if (timeDifference < 0) {
        // You can handle what to display when the target date has passed
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
    },
  },
  mounted() {
    // Update the countdown every second
    setInterval(this.updateCountdown, 1000);

    // Initial calculation
    this.updateCountdown();
  },
};
</script>


<style scoped>
/* Center the content vertically and horizontally */
.coming-soon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Style the heading */
h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

/* Style the description text */
p {
  font-size: 18px;
  color: #777;
  max-width: 400px;
  text-align: center;
}

/* Style a "Notify Me" button (optional) */
.notify-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.notify-button:hover {
  background-color: #0056b3;
}
</style>

