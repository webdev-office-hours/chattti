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
import { db } from "../db";

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
  firestore: {
    messages: db.collection("messages").orderBy("createdAt")
  },
  methods: {
    sendMessage(message) {
      db.collection("messages").add({
        createdAt: new Date(),
        value: message
      });

      this.newMessage = "";
    }
  }
};
</script>
