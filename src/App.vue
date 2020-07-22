<template>
  <div id="app">
    <div class="container-scroller">
      <app-header />
      <div class="container-fluid page-body-wrapper">
        <app-sidebar />
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>

          <app-footer />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "../src/components/partials/AppHeader";
import AppSidebar from "../src/components/partials/AppSidebar";
import AppFooter from "../src/components/partials/AppFooter";
export default {
  name: "app",
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
  },
};
</script>
