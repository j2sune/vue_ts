<template>
  <div class="home">
    <div class="welcome">
      <p>안녕하새우</p>
      <router-link to="/main" type="button" class="toMain">
        <slot name="button"></slot>
      </router-link>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .welcome {
    text-align:center;
    .toMain {
      font-size:16px;
      font-weight:600;
      color:pink;
    }
  }
</style>
