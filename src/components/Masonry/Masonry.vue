<template>
  <div :class="containerClassNames">
    <div :class="classNames.item" v-for="({ node }, index) in items" :key="index" >
      <div :class="classNames.content">
        <Card :content="node" v-bind="cardProps" />
      </div>
    </div>
  </div>
</template>

<script src="./Masonry.js"></script>

<style src="./Masonry.css"></style>
