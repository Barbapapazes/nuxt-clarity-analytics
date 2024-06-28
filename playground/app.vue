<script lang="ts" setup>
import { clarityConsent } from '#imports'

function consent() {
  clarityConsent()
}
</script>

<template>
  <div>
    <h1>Playground</h1>

    <button @click="consent()">
      Click me
    </button>
  </div>
</template>
