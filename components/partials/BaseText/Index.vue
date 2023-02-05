<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) },
  placeholder: {
    required: false,
    type: String,
    default: "",
  },
  label: {
    required: false,
    type: String,
    default: "",
  },
  inputId: {
    required: false,
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

function emitValue(e) {
  let value = e.target.value;
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emit("update:modelValue", value);
}
</script>

<template>
  <div class="base-text">
    <label v-if="label" :for="inputId" class="m-b-8 d-inline-block">{{
      label
    }}</label>

    <input
      type="text"
      :name="inputId"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emitValue"
      class="base-text-input"
    />
  </div>
</template>


<style lang="scss" scoped>
.base-text {
  .base-text-input {
    width: 100%;
    padding: 12px 8px;
    border: 1px solid #aba9a9;
    border-radius: 6px;
  }
}
</style>