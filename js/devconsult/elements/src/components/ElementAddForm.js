export default {
    data() {

    },
    methods: {
      sendMessage() {
          this.$emit("send-message");
      }
    },
    template: `
        <button @click="sendMessage">Отправить сообщение</button>
    `
}