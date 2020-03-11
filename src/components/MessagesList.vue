<template>
  <ul>
    <li
      v-for="(message, index) in messageList"
      :key="index"
      class="my-2 flex justify-between"
      v-show="message.value"
    >
      <div>
        <span
          v-if="message.name"
          class="font-semibold bg-blue-500 px-3 py-1 rounded-bl-lg rounded-tr-lg text-white"
        >{{message.name}}</span>
        <span class="pl-2">{{message.value}}</span>
      </div>
      <span class="text-gray-600">{{message.createdAt.seconds}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["messageList"]
};
</script>