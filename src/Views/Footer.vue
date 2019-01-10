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
}
</script>

<style lang="scss">
$anchor-color : black;
footer{
  font-size: 1.6em;
  div{
    margin: 0.8em 0;
    text-align: center;
    svg{
      margin: 0 0.2em 0 2em;
    }
    span{
      font-size: 0.7em;
      font-weight: bold;
      a{
        color: $anchor-color;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        &:active{
          color: $anchor-color;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
