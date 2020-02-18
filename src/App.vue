<template>
  <div>
    <h2>Chattty!</h2>
    <MessagesList />
    <input type="text" placeholder="Enter Messsage" />
    <button>Send</button>
  </div>
</template>

<script>
import MessagesList from "./components/MessagesList";

export default {
  name: "App",
  components: {
    MessagesList
  }
};
</script>
