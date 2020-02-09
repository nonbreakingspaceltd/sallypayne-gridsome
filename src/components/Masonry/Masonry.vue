<template>
  <div :class="classNames.container">
    <div :class="classNames.item" v-for="({ node }, index) in items" :key="index">
      <div :class="classNames.content">
        <Card :content="node" :modifier="cardModifier"/>
      </div>
    </div>
  </div>
</template>

<script src="./Masonry.js"></script>

<style src="./Masonry.css"></style>
