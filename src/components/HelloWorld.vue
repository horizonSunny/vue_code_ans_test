<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >
    </p>
    <h3>{{ name1 }},{{ name2 }}</h3>
    <h3>{{ allName }}</h3>
    <button @click="clickTest">test</button>
    <button @click="resetClick">reset</button>
    <button @click="test123">test2</button>
  </div>
</template>

<script>
import {
  routes,
  showRouter} from '../router/router'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      test: {},
      name1: "hello",
      name2: 'world'
    }
  },
  computed: {
    allName () {
      return this.name1 + this.name2
    }
  },
  methods: {
    clickTest () {
      // const newRouter = router.filter((item) => {
      //   return item.type > 1
      // })
      this.name1 = 'hole'
      routes.forEach(element => {
        element.test = 'this is a test'
      });
      // router = ['1']
      // console.log('router_', newRouter);
      setTimeout(() => {
        showRouter()
      }, 1000);
      // let test = mixinHello;
      // console.log('mixinHello_', test())
      // console.log('testInfo_', testInfo);
      // var obj1 = new Object();
      // let obj1 = {}
      // let obj2 = obj1;

      // obj1.name = "我有名字了";

      // console.log(obj2.name);
    },
    resetClick () {
      console.log(1)
      setTimeout(() => {
        console.log(2)
      }, 0);
      const a = new Promise((resolve, reject) => {
        console.log(3)
        resolve()
      });
      a.then(() => {
        console.log(5);
      })
      process.nextTick(
        () => console.log(6)
      )
      console.log(7)
    },
    test123 () {
      // const a = {
      //   b: {
      //     def: '423'
      //   }

      // }
      // const c = {
      //   d: { abc: '23' }
      // }
      // const n = a || c;
      // console.log('n_', n);

      // test2
      const a = [];
      a.unshift(1)
      console.log('a_', a);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
