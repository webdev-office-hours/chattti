<template>
  <ul>
    <li v-for="(message, index) in messageList" :key="index">{{message.value}}</li>
  </ul>
</template>

<script>
export default {
  props: ["messageList"]
};
</script>