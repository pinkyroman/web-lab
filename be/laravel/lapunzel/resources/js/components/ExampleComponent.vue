<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Example Component</div>
          <div class="card-body">I'm an example component.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
    document
      .getElementById("acceptButton")
      .addEventListener("click", this.onAccept);
    document
      .getElementById("reloadButton")
      .addEventListener("click", this.onReload);
  },
  methods: {
    onAccept() {
      console.log("your request has been accepted.");
    },
    onReload() {
      console.log("reload something anything whatever.");
    },
  },
};
</script>
