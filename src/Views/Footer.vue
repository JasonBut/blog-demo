<template>
  <div>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-github-fill"></use>
    </svg>
    <span><a href="https://github.com/JasonBut" rel="github">Github</a></span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-QQ"></use>
    </svg>
    <span>153436677</span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-phone-fill"></use>
    </svg>
    <span>13650700330</span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-mail-fill"></use>
    </svg>
    <span><a href="mailto://Jason.But@Yahoo.com" rel="email">Email</a></span>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss">
footer{
  background: rgba(0,0,0,0.45);
  font-size: 0.9em;
  text-align: center;
  color: #fdfdfd;
  margin-top: 1%;
  border-top: #065b9c 0.2em solid;
  div{
    margin-top: 1em;
    svg{
      margin: 0 0.5em 0 2em;
    }
    span{
      font-weight: bold;
    }
  }
}
</style>
