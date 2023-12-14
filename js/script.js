const { createApp } = Vue;

createApp({
  data() {
    return {
      disksList: [],
      detailDisk: [],
      apiUrl: "server.php",
      display: false,
    };
  },

  created() {
    axios.get(this.apiUrl).then((resp) => {
      this.disksList = resp.data;
    });
  },

  methods: {
    diskDetail(index) {
      axios.get(this.apiUrl + "?id=" + index).then((resp) => {
        this.detailDisk = resp.data;
        console.log(this.detailDisk);
      });

      document.getElementById("details-card").style.display = "flex";
    },

    removeDetailsCard() {
      document.getElementById("details-card").style.display = "none";
    },
  },
}).mount("#app");
