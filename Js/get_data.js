"use strict";

export default async function get_data() {
  const data = await fetch("../data/algorithms.json");
  return data.json();
}
