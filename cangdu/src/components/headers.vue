<template>
  <div>
    <header data-v-cec0c0c0 data-v-3ea254f4 id="head_top">
      <slot name="left"></slot>
      <slot name="title"></slot>
      <slot name="right"></slot>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
#head_top[data-v-cec0c0c0] {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.5045rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.15rem 0 0.15rem;
  i {
    color: white;
    font-size: 0.2rem;
  }
  span {
    color: white;
  }
  span:nth-of-type(1) {
    font-size: 0.18rem;
  }
  span:nth-of-type(2) {
    font-size: 0.2rem;
    font-weight: 600;
    text-align: center;
  }
  span:nth-of-type(3) {
    font-size: 0.15rem;
  }
}
a,
article,
aside,
b,
body,
button,
dd,
div,
dl,
dt,
figcaption,
figure,
footer,
h1,
h2,
h3,
h4,
h5,
h6,
header,
i,
input,
li,
nav,
p,
section,
select,
span,
textarea,
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  color: #333;
  font-weight: 400;
  font-family: Microsoft Yahei;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}
</style>