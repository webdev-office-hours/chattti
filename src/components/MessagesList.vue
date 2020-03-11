<template>
  <ul styles="
    background-color: #faf3ff;
    padding: 15px;
    margin-left: 30px;
    margin-right: 30px;
">
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