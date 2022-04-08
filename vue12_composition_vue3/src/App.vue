<template>
  <h3>{{ userName }}</h3>
  <h3>{{ age }}</h3>
  <br />
  <h1>{{ userRef }}</h1>
  <h1>{{ userRefUserName }}</h1>
  <h1>{{ userRefUserAge }}</h1>
  <br />
  <h1>{{ user2 }}</h1>
  <h1>{{ user2Name }}</h1>
  <h1>{{ user2Age }}</h1>
  <br />
  <h1>{{ course }}</h1>
</template>

<script>
import { ref, reactive, isRef, isReactive, toRefs } from "vue";

export default {
  setup() {
    const userNameRef = ref("Alen Su");
    const ageRef = ref(45);
    const userRef = ref({ userName: "peter", age: 50 });
    const user2 = reactive({ userName: "DANT", age: 36 });
    console.log(
      `ageRef is ref?${isRef(ageRef)}, is reactive? ${isReactive(ageRef)}`
    );
    console.log(
      `user2 is ref?${isRef(user2)}, is reactive? ${isReactive(user2)}`
    );
    const courseRef = toRefs({ courseName: "poop", duration: 35 });
    console.log(
      `courseRef is ref?${isRef(courseRef)}, courseRef.duration is ref?${isRef(
        courseRef.duration
      )}`
    );
    setTimeout(function () {
      userNameRef.value = "alen suu";
      ageRef.value += 1;
      userRef.value.userName = "jane";
      userRef.value.age = 60;
      user2.userName = "dant123";
      user2.age = 40;
      courseRef.courseName = "python and object oriented";
      courseRef.duration = 70;
    }, 2000);
    return {
      userName: userNameRef,
      age: ageRef,
      userRef: userRef,
      userRefUserName: userRef.value.userName,
      userRefUserAge: userRef.value.age,
      user2: user2,
      user2Name: user2.userName,
      user2Age: user2.age,
      course: courseRef,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
