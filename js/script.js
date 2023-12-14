const { createApp } = Vue;

createApp({
  data() {
    return {
      disksList: [],
      apiUrl: "server.php",
    };
  },
  created() {
    axios.get(this.apiUrl).then((resp) => {
      this.disksList = resp.data;
    });
  },
  methods: {

  },
}).mount("#app");
