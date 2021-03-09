<script>
  import Table from "./Table.svelte";
  import Form from "./Form.svelte";

  let id;
  let name = "";
  let price = "";

  function edit(event) {
    ({ id, name, price } = event.detail);
  }

  function remove(event) {
    id = null;
    name = "";
    price = "";
  }
</script>

<style>
  main {
    flex: 1;
    align-content: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
  }
</style>

<main>
  <h1>Project Estimator</h1>
  <Form bind:price bind:name bind:id />

  <Table on:edit={edit} on:remove={remove} />
</main>
