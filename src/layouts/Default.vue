<template>
  <main id="main" class="sp-l-main" role="main">
    <slot />
  </main>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
