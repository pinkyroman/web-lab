<template>
  <v-app>
    <!-- 앱바 테마를 primary로 설정 -->
    <v-app-bar app color="primary" dark>
      <!-- 왼쪽에 메뉴 아이콘 넣음 -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>멀티 페이지</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- 내용 영역에 라우터 페이지 렌더링 -->
    <v-content>
      <v-slide-x-transitions mode="out-in">
        <router-view></router-view>
      </v-slide-x-transitions>
    </v-content>
    <!-- 바닥글 테마를 secondary로 설정 -->
    <v-footer color="secondary" fixed dark>
      <div class="mx-auto">HMAPS.net</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
