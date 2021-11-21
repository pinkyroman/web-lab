<template>
  <v-app>
    <!-- 전체영역을 카드 UI로 변경하여 색상의 일관성 유지 -->
    <v-card>
      <v-app-bar dark color="lime">
        <!-- 좌측에 메뉴 아이콘 넣음 -->
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>TODO 리스트</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <v-container>
          <v-row my-5>
            <v-col cols="8" offset="1">
              <v-text-field label="할 일" autofocus v-model="todoTitle"></v-text-field>
            </v-col>
            <v-col cols="2" my-2>
              <v-btn fab max-height="50px" max-width="50px" color="pink" dark @click="submitTodo"></v-btn>
              <v-icon>add</v-icon>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-list two-line v-for="todo in todos" :key="todo.key">
                <!-- item.edited 값을 통해 읽기모드인 경우만 표시 -->
                <v-card flat color="grey lighten-3" v-if="!todo.edited">
                  <!-- 항목을 하나씩 가져와서 tile 단위로 표시 함 -->
                  <v-list-item class="py-2">
                    <v-list-item-action>
                      <!-- 체크박스 표시하고 선택되면 변경상태 DB에 저장 -->
                      <v-checkbox v-model="todo.completed" @change="checkboxChanged(todo)"></v-checkbox>
                    </v-list-item-action>
                    <!-- 제목을 표시하고 체크 선택되면 취소선 표시 -->
                    <v-list-item-content>
                      <v-list-item-title :class="{ style_completed: item.completed }">
                        {{ item.title}}
                      </v-list-item-title>
                      <!-- 두번째 줄에 아이콘 배치 -->
                      <v-list-item-subtitle class="mt-2">
                        <!-- 수정 아이콘 표시하고 클릭하면 수정모드로 변경함 -->
                        <v-icon class="pointer" @click="setEditTodo(todo['.key'])">create</v-icon>
                        <!-- 삭제 아이콘 표시하고 클릭하면 해당 item 삭제 -->
                        <v-icon class="pointer" @click="setEditTodo(todo['.key'])">delete</v-icon>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>

                <!-- item.edited 값을 통해 수정모드인 경우 어둡게 표시 -->
                <v-card v-else dark>
                  <v-list-item class="py-2">
                    <v-list-item-action>
                      <v-checkbox v-model="todo.completed"></v-checkbox>
                    </v-list-item-action>
                    <!-- v-list-item 안에서 텍스트 입력과 버튼 사용을 위해 v-card 엘리먼트 사용 -->
                    <v-card-text>
                      <v-text-field autofocus clearable v-model="todo.title"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                      <v-icon class="pointer" @click="saveEdit(todo)">save</v-icon>
                      <v-icon class="pointer" @click="cancelEdit(todo['.key'])">cancel</v-icon>
                    </v-card-actions>
                  </v-list-item>
                </v-card>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
  // 파이어베이스 DB 가져오기
  import { todosDB } from '@/datasources/firebase';

  export default {
    name: 'App',
    data() {
      return {
        todos: [],  // 할 일 데이터 목록 저장
        todoTitle: '', // 할 일 제목 저장
      }
    },
    // 파이어베이스를 쉽게 사용하도록 todos 변수로 변경
    firebase: {
      todos: todosDB,
    },
    methods: {
      // 할 일 제목, 완료, 수정모드 상태 값을 DB에 저장
      submitTodo() {
        todosDB.push({
          title: this.todoTitle,
          completed: false,
          edited: false,
        });
        this.todoTitle = '';
      },
      // 전달된 할 일을 DB에서 제거
      removeTodo(key) {
        todosDB.child(key).remove();
      },
      // 전달된 할 일의 edited를 수정 모드로 변경
      setEditTodo(key) {
        todosDB.child(key).update({
          edited: true,
        });
      },
      // 전달된 할 일의 edited를 읽기 모드로 변경
      cancelEdit(key) {
        todosDB.child(key).update({
          edited: false,
        });
      },
      // 전달된 할 일의 변경된 값을 DB에 저장
      saveEdit(todo) {
        const key = todo['.key'];
        todosDB.child(key).set({
          title: todo.title,
          completed: todo.completed,
          edited: false,
        });
      },
      // 체크박스 선택되면 DB에 completed 값 저장
      checkboxChanged(todo) {
        const key = todo['.key'];
        todosDB.child(key).update({
          completed: todo.completed,
        });
      },
    },
  }
</script>

<style>
  .pointer {
    /* 마우스 포인터를 손모양으로 변경 */
    cursor: pointer;
  }
  
  .style_completed {
    /* 할 일의 제목을 취소선으로 변경 */
    text-decoration: line-through;
  }
</style>