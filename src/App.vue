<template>
  <div>
    <h2>Chattty!</h2>
    <MessagesList :messageList="messages" />
    <input type="text" placeholder="Enter Messsage" v-model="newMessage" />
    <button @click="sendMessage(newMessage)">Send</button>
  </div>
</template>

<script>
import MessagesList from "./components/MessagesList";

export default {
  name: "App",
  components: {
    MessagesList
  },
  data() {
    return {
      messages: [],
      newMessage: ""
    };
  },
  methods: {
    sendMessage(message) {
      this.messages = [...this.messages, message];
      this.newMessage = "";
    }
  }
};
</script>
