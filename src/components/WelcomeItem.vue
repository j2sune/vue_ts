<template>
  <div class="home">
    <div class="details">
      <p>안녕하새우</p>
      <router-link to="/main" type="button" class="toMain">
        <slot name="button"></slot>
      </router-link>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<style scoped>
</style>
