<template>
  <div>
    <h2>Chattty!</h2>
    <MessagesList :messageList="messages" />
    <span v-if="!isValidMessage">Test Please enter a message</span>
    Your automatically generated chat name: {{name}}
    <br />
    <input type="text" placeholder="Enter Messsage" v-model="newMessage" />
    <button @click="sendMessage(newMessage)">Send</button>
  </div>
</template>

<script>
import * as faker from "faker";
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
      newMessage: "",
      isValidMessage: true,
      name: ""
    };
  },
  firestore: {
    messages: db.collection("messages").orderBy("createdAt")
  },
  created() {
    this.name = faker.name.findName();
  },
  methods: {
    sendMessage(message) {
      if (message === "") {
        this.isValidMessage = false;
        return;
      } else {
        this.isValidMessage = true;
      }

      db.collection("messages").add({
        createdAt: new Date(),
        value: message,
        name: this.name
      });

      this.newMessage = "";
    }
  }
};
</script>
