// 引入封装好的组件
import MyButton from "./stories/Button.vue";
import MyHeader from "./stories/Header.vue";
import MyPage from "./stories/Page.vue";
const coms = [MyButton,MyHeader,MyPage]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
};

export default install; // 这个方法以后再使用的时候可以被use调用