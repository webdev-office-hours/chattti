<template>
  <div class="container mx-auto px-4">
    <nav class="flex flex-wrap items-center justify-between p-4">
      <div class="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <a class="text-xl text-indigo-500 font-semibold" href="#">Dunder Mifflin</a>
      </div>
      <div class="block lg:hidden">
        <button
          class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
        <a
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700"
          href="#"
        >Products</a>
        <a
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700"
          href="#"
        >Team</a>
        <a
          class="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700"
          href="#"
        >Customers</a>
      </div>
      <div class="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
        <a
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700"
          href="#"
        >Blog</a>
        <a
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700"
          href="#"
        >FAQ</a>
        <a
          class="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700"
          href="#"
        >Contact</a>
      </div>
    </nav>
    <!-- Header -->
    <section class="p-4">
      <div class="flex flex-wrap">
        <!-- Left Header Content -->
        <div class="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 text-center">
          <img class="mx-auto mb-3" src="placeholders/icons/shield.svg" alt />
          <h3 class="text-2xl mb-3 font-heading">High durability</h3>
          <p
            class="text-gray-500 leading-relaxed"
          >Forget about paper jams with our increased stability product. Ideal for high-quality printing, colour printing and photocopying.</p>
        </div>

        <!-- Right Header Content -->
        <div class="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 md:border-l">
          <img class="mx-auto mb-3" src="placeholders/icons/cloud-tools.svg" alt />
          <h2>Chattty!</h2>
          <MessagesList class="my-5" :messageList="messages" :activeUser="name"/>
          <span v-if="!isValidMessage">Test Please enter a message</span>
          <span class="border-t border-purple-300 py-1 flex">
            Your automatically generated chat name:
            <span class="text-blue-600 font-semibold pl-2">{{name}}</span>
          </span>
          <div class="flex">
            <input
              class="flex-grow w-3/4 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-l-lg py-2 px-4 appearance-none leading-normal"
              type="text"
              placeholder="Enter Messsage"
              v-on:keyup.enter="sendMessage(newMessage)"
              v-model="newMessage"
            />
            <button
              class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-r-lg"
              @click="sendMessage(newMessage)"
            >Send</button>
          </div>
        </div>
      </div>
    </section>
    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4 -mb-6">
        <div class="lg:w-1/3 px-4 mb-6">
          <img src="placeholders/icons/shield.svg" alt />
          <h3 class="text-xl my-2 font-heading">High durability</h3>
          <p
            class="text-gray-500 leading-relaxed"
          >Forget about paper jams with our increased stability product. Ideal for high-quality printing, colour printing and photocopying.</p>
        </div>
        <div class="lg:w-1/3 px-4 mb-6">
          <img src="placeholders/icons/cloud-tools.svg" alt />
          <h3 class="text-xl my-2 font-heading">Versatility</h3>
          <p
            class="text-gray-500 leading-relaxed"
          >Multi-functional paper for various office needs. Snow-white sheets will shine bright like diamond for many years.</p>
        </div>
        <div class="lg:w-1/3 px-4 mb-6">
          <img src="placeholders/icons/cart.svg" alt />
          <h3 class="text-xl my-2 font-heading">Value-based price</h3>
          <p
            class="text-gray-500 leading-relaxed"
          >The best combination of quality and economy comes with Dunder Mifflin paper. The offer includes paper in wide range of density and sizes.</p>
        </div>
      </div>
    </section>
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
