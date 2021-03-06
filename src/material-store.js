import { writable } from "svelte/store";

const materialStore = writable([]);
const KEY = "materials";

if (localStorage.getItem(KEY)) {
  materialStore.set(JSON.parse(localStorage.getItem(KEY)));
}

const add = (name, price) => {
  materialStore.update((items) => {
    const item = {
      name,
      price,
      id: new Date().getTime(),
    };

    return [item, ...items];
  });
};

const edit = (id, name, price) => {
  materialStore.update((items) => {
    const index = items.findIndex((i) => i.id == id);
    if (index === -1) {
      return items;
    }

    items[index].name = name;
    items[index].price = price;

    return items;
  });
};

const remove = (id) => {
  materialStore.update((items) => {
    return items.filter((i) => i.id !== id);
  });
};

materialStore.subscribe((items) => {
  const jsonString = JSON.stringify(items);
  localStorage.setItem(KEY, jsonString);
});

export default {
  subscribe: materialStore.subscribe,
  add,
  edit,
  remove,
};
