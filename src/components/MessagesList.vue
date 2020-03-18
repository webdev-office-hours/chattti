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
          class="font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg text-white"
          :class="{'bg-blue-500': activeUser !== message.name, 'bg-purple-500': activeUser === message.name}"
        >{{message.name}}</span>
        <span class="pl-2">{{message.value}}</span>
      </div>
      <span class="text-gray-600">{{getFormattedDate(message.createdAt)}}</span>
    </li>
  </ul>
</template>

<script>
import * as moment from "moment";

export default {
  props: ["messageList", "activeUser"],
  methods: {
    getFormattedDate(timestamp) {
      return moment(timestamp.toDate(), "YYYYMMDD").fromNow();
    }
  }
};
</script>