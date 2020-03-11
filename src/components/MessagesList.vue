<template>
  <ul>
    <li v-for="(message, index) in messageList" :key="index">
      <strong>{{message.name}}</strong>
      : {{message.value}}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["messageList"]
};
</script>